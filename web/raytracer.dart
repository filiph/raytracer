/// Line-for-line port of the TypeScript raytracer to idiomatic Dart. Type
/// information that was missing in the TypeScript version was intentionally
/// left out here, too.

library ts_raytracer;

import 'dart:async';
import 'dart:html';
import 'dart:math';

class Vector {
  final double x;
  final double y;
  final double z;

  const Vector(this.x, this.y, this.z);

  Vector operator *(num k) => Vector(k * x, k * y, k * z);
  Vector operator -(Vector o) => Vector(x - o.x, y - o.y, z - o.z);
  Vector operator +(Vector o) => Vector(x + o.x, y + o.y, z + o.z);
  double dot(Vector o) => x * o.x + y * o.y + z * o.z;
  double mag() => sqrt(x * x + y * y + z * z);
  Vector norm() {
    var mag = this.mag();
    var div = (mag == 0) ? double.infinity : 1.0 / mag;
    return this * div;
  }

  Vector cross(Vector o) =>
      Vector(y * o.z - z * o.y, z * o.x - x * o.z, x * o.y - y * o.x);
}

class Color {
  final double r;
  final double g;
  final double b;
  const Color(this.r, this.g, this.b);

  Color scale(double k) => Color(k * r, k * g, k * b);
  Color operator +(Color v) => Color(r + v.r, g + v.g, b + v.b);
  Color operator *(Color v) => Color(r * v.r, g * v.g, b * v.b);

  static var white = Color(1.0, 1.0, 1.0);
  static var grey = Color(0.5, 0.5, 0.5);
  static var black = Color(0.0, 0.0, 0.0);
  static var background = Color.black;
  static var defaultColor = Color.black;

  DrawingColor toDrawingColor() {
    var legalize = (num d) => d > 1 ? 1 : d;
    return DrawingColor(
        r: (legalize(r) * 255).toInt(),
        g: (legalize(g) * 255).toInt(),
        b: (legalize(b) * 255).toInt());
  }
}

class DrawingColor {
  final int r;
  final int g;
  final int b;
  DrawingColor({required this.r, required this.g, required this.b});
}

class Camera {
  Vector pos;
  Vector forward;
  Vector right;
  Vector up;

  factory Camera(Vector pos, Vector lookAt) {
    var down = Vector(0.0, -1.0, 0.0);
    var forward = (lookAt - pos).norm();
    var right = forward.cross(down).norm() * 1.5;
    var up = forward.cross(right).norm() * 1.5;
    return Camera._(pos, forward, right, up);
  }

  Camera._(this.pos, this.forward, this.right, this.up);
}

class Ray {
  Vector start;
  Vector dir;
  Ray(this.start, this.dir);
}

class Intersection {
  Thing thing;
  Ray ray;
  double dist;
  Intersection(this.thing, this.ray, this.dist);
}

abstract class Surface {
  Color diffuse(Vector pos);
  Color specular(Vector pos);
  double reflect(Vector pos);
  int get roughness;
}

abstract class Thing {
  Intersection? intersect(Ray ray);
  Vector normal(Vector pos);
  Surface get surface;
}

class Light {
  Vector pos;
  Color color;
  Light(this.pos, this.color);
}

class Scene {
  List<Thing> things;
  List<Light> lights;
  Camera camera;
  Scene(this.things, this.lights, this.camera);
}

class Sphere implements Thing {
  double radius;
  double radius2;
  Vector center;
  Surface surface;

  Sphere(this.center, double radius, this.surface)
      : radius = radius,
        radius2 = radius * radius;

  Vector normal(Vector pos) => (pos - center).norm();
  Intersection? intersect(Ray ray) {
    var eo = center - ray.start;
    var v = eo.dot(ray.dir);
    var dist = 0.0;
    if (v >= 0) {
      var disc = radius2 - (eo.dot(eo) - v * v);
      if (disc >= 0) {
        dist = v - sqrt(disc);
      }
    }
    if (dist == 0) {
      return null;
    } else {
      return Intersection(this, ray, dist);
    }
  }
}

class Plane implements Thing {
  Vector norm;
  double offset;
  Surface surface;
  Plane(this.norm, this.offset, this.surface);

  Intersection? intersect(Ray ray) {
    var denom = norm.dot(ray.dir);
    if (denom > 0) {
      return null;
    } else {
      var dist = (norm.dot(ray.start) + offset) / (-denom);
      return Intersection(this, ray, dist);
    }
  }

  Vector normal(Vector pos) => norm;
}

// Ugh. We're trying to emulate 'module' here, without a separate file.
// Dart programs don't normally use classes in this way.
class Surfaces {
  static final Surface shiny =
      CustomSurface(((_) => Color.white), ((_) => Color.grey), (_) => 0.7, 250);
  static final Surface checkerboard = CustomSurface(
      (Vector pos) {
        if ((pos.z.floor() + pos.x.floor()) % 2 != 0) {
          return Color.white;
        } else {
          return Color.black;
        }
      },
      ((_) => Color.white),
      (pos) {
        if ((pos.z.floor() + pos.x.floor()) % 2 != 0) {
          return 0.1;
        } else {
          return 0.7;
        }
      },
      150);
}

class CustomSurface implements Surface {
  final Color Function(Vector) _diffuse, _specular;
  final double Function(Vector) _reflect;
  final int roughness;
  CustomSurface(this._diffuse, this._specular, this._reflect, this.roughness);

  Color diffuse(Vector pos) => _diffuse(pos);
  Color specular(Vector pos) => _specular(pos);
  double reflect(Vector pos) => _reflect(pos);
}

class RayTracer {
  int _maxDepth = 5;

  Intersection? _intersections(Ray ray, Scene scene) {
    double closest = double.infinity;
    Intersection? closestInter;
    for (Thing thing in scene.things) {
      Intersection? inter = thing.intersect(ray);
      if (inter != null && inter.dist < closest) {
        closestInter = inter;
        closest = inter.dist;
      }
    }
    return closestInter;
  }

  double? _testRay(Ray ray, Scene scene) {
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

  Color _shade(Intersection isect, Scene scene, int depth) {
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

  Color _getReflectionColor(Thing thing, Vector pos, Vector normal, Vector rd,
      Scene scene, int depth) {
    var color = _traceRay(Ray(pos, rd), scene, depth + 1);
    var scale = thing.surface.reflect(pos);
    return color.scale(scale);
  }

  Color _getNaturalColor(
      Thing thing, Vector pos, Vector norm, Vector rd, Scene scene) {
    Color addLight(Color col, Light light) {
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
            ? light.color.scale(pow(specular, thing.surface.roughness) as double)
            : Color.defaultColor;
        return col +
            (thing.surface.diffuse(pos) * lcolor) +
            (thing.surface.specular(pos) * scolor);
      }
    }

    ;
    return scene.lights.fold(Color.defaultColor, addLight);
  }

  void render(Scene scene, CanvasRenderingContext2D ctx, int screenWidth,
      int screenHeight) {
    Vector getPoint (int x, int y, Camera camera) {
      var recenterX = (x) => (x - (screenWidth / 2.0)) / 2.0 / screenWidth;
      var recenterY = (y) => -(y - (screenHeight / 2.0)) / 2.0 / screenHeight;
      return (camera.forward +
              camera.right * recenterX(x) +
              camera.up * recenterY(y))
          .norm();
    };

    for (var y = 0; y < screenHeight; y++) {
      for (var x = 0; x < screenWidth; x++) {
        var color = _traceRay(
            Ray(scene.camera.pos, getPoint(x, y, scene.camera)), scene, 0);
        var c = color.toDrawingColor();
        ctx.fillStyle = "rgb(${c.r}, ${c.g}, ${c.b})";
        ctx.fillRect(x, y, x + 1, y + 1);
      }
    }
  }
}

Scene defaultScene() => Scene([
      Plane(Vector(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
      Sphere(Vector(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
      Sphere(Vector(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny)
    ], [
      Light(Vector(-2.0, 2.5, 0.0), Color(0.49, 0.07, 0.07)),
      Light(Vector(1.5, 2.5, 1.5), Color(0.07, 0.07, 0.49)),
      Light(Vector(1.5, 2.5, -1.5), Color(0.07, 0.49, 0.071)),
      Light(Vector(0.0, 3.5, 0.0), Color(0.21, 0.21, 0.35))
    ], Camera(Vector(3.0, 2.0, 4.0), Vector(-1.0, 0.5, 0.0)));

void main() {
  int width = 256;
  int height = 256;

  CanvasElement canvas = querySelector("#dart-canvas") as CanvasElement;
  Element info = querySelector("#dart-info")!;
  ButtonElement button = querySelector("#dart-button") as ButtonElement;

  int i = 0;
  int rendersPerBatch = 1; // Change to run several raytraces on first click.
  var times = [];

  button.onClick.listen((_) async {
    info.text = "Rendering...";
    var ctx = canvas.context2D;
    ctx.clearRect(0, 0, width, height);
    // Take the time to show the above to user.
    await Future.delayed(Duration(milliseconds: 100));
    var start = window.performance.now();
    var rayTracer = RayTracer();
    rayTracer.render(defaultScene(), ctx, width, height);
    var time = window.performance.now() - start;
    info.text = "Rendered in ${time.round()} ms.";
    times.add(time);
    print(times);
    i++;
    if (i < rendersPerBatch) button.click();
  });
}
