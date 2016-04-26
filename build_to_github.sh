#!/usr/bin/env bash

set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
echo "TypeScript compile"
tsc web/raytracer.ts
echo "Dart compile"
pub build --mode debug --verbosity error
echo "Copy"
cp -r build/web/* ../raytracer-ghpages/raytracer/
cd ../raytracer-ghpages/raytracer/
echo "Git commit"
git commit -am .
echo "Git push"
git push origin gh-pages