import 'dart:html';
import 'dart:math';

import 'raytracer.dart' hide RayTracer;

class CustomRayTracer {
  int _maxDepth = 5;

  Scene scene;
  CanvasRenderingContext2D ctx;
  int screenWidth;
  int screenHeight;

  int activeJobId = 0;
  int count = 0;

  CustomRayTracer(this.scene, this.ctx, this.screenWidth, this.screenHeight);

  void restart() {
    count = 0;
    renderAsync();
  }

  _intersections(Ray ray, Scene scene) {
    double closest = double.infinity;
    Intersection closestInter;
    for (Thing thing in scene.things) {
      Intersection inter = thing.intersect(ray);
      if (inter != null && inter.dist < closest) {
        closestInter = inter;
        closest = inter.dist;
      }
    }
    return closestInter;
  }

  _testRay(Ray ray, Scene scene) {
    var isect = _intersections(ray, scene);
    if (isect != null) {
      return isect.dist;
    } else {
      return null;
    }
  }

  Color _traceRay(Ray ray, Scene scene, int depth) {
    var isect = _intersections(ray, scene);
    if (isect == null) {
      return Color.background;
    } else {
      return _shade(isect, scene, depth);
    }
  }

  _shade(Intersection isect, Scene scene, int depth) {
    var d = isect.ray.dir;
    var pos = d * isect.dist + isect.ray.start;
    var normal = isect.thing.normal(pos);
    var reflectDir = d - normal * normal.dot(d) * 2.0;
    var naturalColor = Color.background +
        _getNaturalColor(isect.thing, pos, normal, reflectDir, scene);
    var reflectedColor = (depth >= _maxDepth)
        ? Color.grey
        : _getReflectionColor(
            isect.thing, pos, normal, reflectDir, scene, depth);
    return naturalColor + reflectedColor;
  }

  _getReflectionColor(Thing thing, Vector pos, Vector normal, Vector rd,
      Scene scene, int depth) {
    var color = _traceRay(Ray(pos, rd), scene, depth + 1);
    var scale = thing.surface.reflect(pos);
    return color.scale(scale);
  }

  _getNaturalColor(
      Thing thing, Vector pos, Vector norm, Vector rd, Scene scene) {
    var addLight = (col, Light light) {
      var ldis = light.pos - pos;
      var livec = ldis.norm();
      var neatIsect = _testRay(Ray(pos, livec), scene);
      var isInShadow = (neatIsect == null) ? false : (neatIsect <= ldis.mag());
      if (isInShadow) {
        return col;
      } else {
        var illum = livec.dot(norm);
        var lcolor =
            (illum > 0) ? light.color.scale(illum) : Color.defaultColor;
        var specular = livec.dot(rd.norm());
        var scolor = (specular > 0)
            ? light.color.scale(pow(specular, thing.surface.roughness))
            : Color.defaultColor;
        return col +
            (thing.surface.diffuse(pos) * lcolor) +
            (thing.surface.specular(pos) * scolor);
      }
    };
    return scene.lights.fold(Color.defaultColor, addLight);
  }

  static final _random = Random();

  renderAsync() async {
    Vector getPoint(int x, int y, Camera camera) {
      num recenterX(x) => (x - (screenHeight / 2.0)) / 2.0 / screenHeight;
      num recenterY(y) => -(y - (screenHeight / 2.0)) / 2.0 / screenHeight;
      return (camera.forward +
              camera.right * recenterX(x) +
              camera.up * recenterY(y))
          .norm();
    }

    Color getColor(x, y) => _traceRay(
        Ray(scene.camera.pos, getPoint(x, y, scene.camera)), scene, 0);

    activeJobId = _random.nextInt(1 << 16);
    var thisJobId = activeJobId;
    bool thisJobIsStillActive() => activeJobId == thisJobId;

    querySelector("#full-render")?.style?.display = "none";

    const int logMax = 16;
    const num minSize = 2.8;
    const int frameBudget = 12; // 60 fps plus buffer

    num sizeFromCount(int count) => (logMax - log(count + 10));

    num time = window.performance.now();

    while (sizeFromCount(count) >= minSize && thisJobIsStillActive()) {
      int x = _random.nextInt(screenWidth);
      int y = _random.nextInt(screenHeight);

      var color = getColor(x, y);
      var drawingColor = color.toDrawingColor();
      ctx.setFillColorRgb(drawingColor.r, drawingColor.g, drawingColor.b);

      int size = sizeFromCount(count).floor();

      ctx.fillRect(x - size ~/ 2, y - size ~/ 2, size, size);

      count++;
      if (window.performance.now() - time > frameBudget) {
        await window.animationFrame;
        time = window.performance.now();
      }
    }

    if (!thisJobIsStillActive()) return;

    var pixels = List<int>.generate(screenHeight * screenWidth, (i) => i);
    pixels.shuffle(_random);
    for (int pixel in pixels) {
      int x = pixel % screenWidth;
      int y = pixel ~/ screenWidth;

      var color = getColor(x, y);
      var drawingColor = color.toDrawingColor();
      ctx.setFillColorRgb(drawingColor.r, drawingColor.g, drawingColor.b);
      ctx.fillRect(x, y, 1, 1);

      if (window.performance.now() - time > frameBudget) {
        await window.animationFrame;
        time = window.performance.now();
        if (!thisJobIsStillActive()) return;
      }
    }

    querySelector("#full-render")?.style?.display = "inline";
  }
}

main() async {
  int width = (window.innerWidth * 0.99).floor();
  int height = (window.innerHeight * 0.99).floor();

  var canvas = CanvasElement(width: width, height: height);
  document.body.append(canvas);
  var ctx = canvas.context2D;

  Scene scene = defaultScene();
  var rayTracer = CustomRayTracer(scene, ctx, width, height);

  void moveForward() {
    scene.camera.pos = scene.camera.pos + scene.camera.forward;
  }

  void moveBackward() {
    scene.camera.pos = scene.camera.pos - scene.camera.forward;
  }

  void moveLeft() {
    scene.camera.pos = scene.camera.pos - scene.camera.right;
  }

  void moveRight() {
    scene.camera.pos = scene.camera.pos + scene.camera.right;
  }

  window.onKeyDown.listen((e) {
    switch (e.keyCode) {
      case 87: // w
        moveForward();
        break;
      case 83: // s
        moveBackward();
        break;
      case 65: // a
        moveLeft();
        break;
      case 68: // d
        moveRight();
        break;
      default:
        return;
    }
    rayTracer.restart();
  });

  var clickMap = <Point<int>, Function>{
    Point<int>(width ~/ 2, 0): moveForward,
    Point<int>(width ~/ 2, height): moveBackward,
    Point<int>(0, height ~/ 2): moveLeft,
    Point<int>(width, height ~/ 2): moveRight
  };

  window.onClick.listen((e) {
    Point winningPoint = clickMap.keys.first;
    for (Point point in clickMap.keys) {
      if (point.distanceTo(e.client) < winningPoint.distanceTo(e.client)) {
        winningPoint = point;
      }
    }
    clickMap[winningPoint]();
    rayTracer.restart();
  });

  await rayTracer.renderAsync();
}
