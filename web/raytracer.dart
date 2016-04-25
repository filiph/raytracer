import 'dart:async';
import 'dart:html';
import 'dart:math';

import 'package:vector_math/vector_math.dart' show Vector3;

class Color {
  static const white = const Color(1.0, 1.0, 1.0);
  static const grey = const Color(0.5, 0.5, 0.5);

  static const black = const Color(0.0, 0.0, 0.0);
  static const background = Color.black;
  static const defaultColor = Color.black;

  final double r, g, b;
  const Color(this.r, this.g, this.b);

  int get blue => _toInt(this.b);
  int get green => _toInt(this.g);
  int get red => _toInt(this.r);

  Color operator *(Color v) => new Color(r * v.r, g * v.g, b * v.b);
  Color operator +(Color v) => new Color(r + v.r, g + v.g, b + v.b);
  Color scale(double k) => new Color(k * r, k * g, k * b);

  static int _toInt(double d) => ((d.clamp(0, 1)) * 255).toInt();
}

class Camera {
  Vector3 pos, forward, right, up;

  Camera(this.pos, Vector3 lookAt) {
    Vector3 down = new Vector3(0.0, -1.0, 0.0);
    forward = (lookAt - pos).normalize();
    right = forward.cross(down).normalize() * 1.5;
    up = forward.cross(right).normalize() * 1.5;
  }
}

class Ray {
  final Vector3 start, dir;
  Ray(this.start, this.dir);
}

class Intersection {
  final Thing thing;
  final Ray ray;
  final double dist;
  Intersection(this.thing, this.ray, this.dist);
}

abstract class Surface {
  int get roughness;
  Color diffuse(Vector3 pos);
  double reflect(Vector3 pos);
  Color specular(Vector3 pos);
}

abstract class Thing {
  Surface get surface;
  Intersection intersect(Ray ray);
  Vector3 normal(Vector3 pos);
}

class Light {
  final Vector3 pos;
  final Color color;
  Light(this.pos, this.color);
}

class Scene {
  final List<Thing> things;
  final List<Light> lights;
  final Camera camera;

  Scene(this.things, this.lights, this.camera);
}

class Sphere implements Thing {
  final double radius2, radius;
  final Vector3 center;
  final Surface surface;

  Sphere(this.center, double radius, this.surface)
      : this.radius = radius,
        this.radius2 = radius * radius;

  Intersection intersect(Ray ray) {
    Vector3 eo = this.center - ray.start;
    double v = eo.dot(ray.dir);
    double dist = 0.0;
    if (v >= 0) {
      double disc = this.radius2 - (eo.dot(eo) - v * v);
      if (disc >= 0) dist = v - sqrt(disc);
    }
    return dist == 0 ? null : new Intersection(this, ray, dist);
  }

  Vector3 normal(Vector3 pos) => (pos - center).normalize();
}

class Plane implements Thing {
  final Vector3 norm;
  final double offset;
  final Surface surface;
  Plane(this.norm, this.offset, this.surface);

  Intersection intersect(Ray ray) {
    double denom = norm.dot(ray.dir);
    if (denom > 0) {
      return null;
    } else {
      var dist = (norm.dot(ray.start) + offset) / (-denom);
      return new Intersection(this, ray, dist);
    }
  }

  Vector3 normal(Vector3 pos) => norm;
}

typedef Color SurfaceFunction(Vector3 pos);
typedef num ReflectFunction(Vector3 pos);

class CustomFunctionalSurface implements Surface {
  final SurfaceFunction _diffuse, _specular;
  final ReflectFunction _reflect;
  final int roughness;
  CustomFunctionalSurface(
      this._diffuse, this._specular, this._reflect, this.roughness);

  Color diffuse(Vector3 pos) => _diffuse(pos);
  Color specular(Vector3 pos) => _specular(pos);
  double reflect(Vector3 pos) => _reflect(pos);
}

class Surfaces {
  static final Surface shiny = new CustomFunctionalSurface(
      (_) => Color.white, (_) => Color.grey, (_) => 0.7, 250);
  static final Surface checkerboard = new CustomFunctionalSurface(
      (Vector3 pos) {
        if ((pos.z.floor() + pos.x.floor()) % 2 != 0) {
          return Color.white;
        } else {
          return Color.black;
        }
      },
      (_) => Color.white,
      (pos) {
        if ((pos.z.floor() + pos.x.floor()) % 2 != 0) {
          return 0.1;
        } else {
          return 0.7;
        }
      },
      150);
}

class RayTracer {
  static const int maxDepth = 5;

  Intersection _intersections(Ray ray, Scene scene) {
    double closest = double.INFINITY;
    Intersection closestInter = null;
    for (Thing thing in scene.things) {
      Intersection inter = thing.intersect(ray);
      if (inter != null && inter.dist < closest) {
        closestInter = inter;
        closest = inter.dist;
      }
    }
    return closestInter;
  }

  double _testRay(Ray ray, Scene scene) {
    var isect = _intersections(ray, scene);
    if (isect != null) {
      return isect.dist;
    } else {
      return null;
    }
  }

  Color _traceRay(Ray ray, Scene scene, int depth) {
    Intersection isect = _intersections(ray, scene);
    if (isect == null) {
      return Color.background;
    } else {
      return _shade(isect, scene, depth);
    }
  }

  Color _shade(Intersection isect, Scene scene, int depth) {
    Vector3 d = isect.ray.dir;
    Vector3 pos = d * isect.dist + isect.ray.start;
    Vector3 normal = isect.thing.normal(pos);
    Vector3 reflectDir = d - normal * normal.dot(d) * 2.0;
    Color naturalColor = Color.background +
        _getNaturalColor(isect.thing, pos, normal, reflectDir, scene);
    Color reflectedColor = (depth >= maxDepth)
        ? Color.grey
        : _getReflectionColor(
            isect.thing, pos, normal, reflectDir, scene, depth);
    return naturalColor + reflectedColor;
  }

  Color _getReflectionColor(Thing thing, Vector3 pos, Vector3 normal,
      Vector3 rd, Scene scene, int depth) {
    Color color = _traceRay(new Ray(pos, rd), scene, depth + 1);
    double scale = thing.surface.reflect(pos);
    return color.scale(scale);
  }

  Color _getNaturalColor(
      Thing thing, Vector3 pos, Vector3 norm, Vector3 rd, Scene scene) {
    Color addLight(Color col, Light light) {
      Vector3 ldis = light.pos - pos;
      Vector3 livec = ldis.normalized();
      double neatIsect = _testRay(new Ray(pos, livec), scene);
      bool isInShadow =
          (neatIsect == null) ? false : (neatIsect <= ldis.length);
      if (isInShadow) {
        return col;
      } else {
        double illum = livec.dot(norm);
        Color lcolor =
            (illum > 0) ? light.color.scale(illum) : Color.defaultColor;
        double specular = livec.dot(rd.normalized());
        Color scolor = (specular > 0)
            ? light.color.scale(pow(specular, thing.surface.roughness))
            : Color.defaultColor;
        return col +
            (thing.surface.diffuse(pos) * lcolor) +
            (thing.surface.specular(pos) * scolor);
      }
    }
    return scene.lights.fold(Color.defaultColor, addLight);
  }

  void render(Scene scene, CanvasRenderingContext2D ctx, int screenWidth,
      int screenHeight) {
    Vector3 getPoint(int x, int y, Camera camera) {
      var recenterX = (x) => (x - (screenWidth / 2.0)) / 2.0 / screenWidth;
      var recenterY = (y) => -(y - (screenHeight / 2.0)) / 2.0 / screenHeight;
      Vector3 result = camera.forward +
          camera.right * recenterX(x) +
          camera.up * recenterY(y);
      return result.normalize();
    }

    for (var y = 0; y < screenHeight; y++) {
      for (var x = 0; x < screenWidth; x++) {
        var color = _traceRay(
            new Ray(scene.camera.pos, getPoint(x, y, scene.camera)), scene, 0);
        ctx.setFillColorRgb(color.red, color.green, color.blue);
        ctx.fillRect(x, y, x + 1, y + 1);
      }
    }
  }
}

final Scene scene = new Scene([
  new Plane(new Vector3(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
  new Sphere(new Vector3(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
  new Sphere(new Vector3(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny)
], [
  new Light(new Vector3(-2.0, 2.5, 0.0), new Color(0.49, 0.07, 0.07)),
  new Light(new Vector3(1.5, 2.5, 1.5), new Color(0.07, 0.07, 0.49)),
  new Light(new Vector3(1.5, 2.5, -1.5), new Color(0.07, 0.49, 0.071)),
  new Light(new Vector3(0.0, 3.5, 0.0), new Color(0.21, 0.21, 0.35))
], new Camera(new Vector3(3.0, 2.0, 4.0), new Vector3(-1.0, 0.5, 0.0)));

void main() {
  int width = 256;
  int height = 256;

  CanvasElement canvas = querySelector("#dart-canvas");
  var info = querySelector("#dart-info");
  var button = querySelector("#dart-button");

  int i = 0;
  int max = 100;
  var times = [];

  button.onClick.listen((_) async {
    info.text = "Rendering...";
    await new Future.delayed(const Duration(milliseconds: 100));
    var ctx = canvas.context2D;
    var start = window.performance.now();
    var rayTracer = new RayTracer();
    rayTracer.render(scene, ctx, width, height);
    var time = window.performance.now() - start;
    info.text = "Rendered in ${time.round()} ms.";
    times.add(time);
    print(times);
    i++;
    if (i <= max) button.click();
  });
}
