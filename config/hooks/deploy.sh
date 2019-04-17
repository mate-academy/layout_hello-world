#!/usr/bin/env bash

cp -R backstop_data/ src/report
git add src/
git commit -m "deploy static content"
git subtree push --prefix src origin gh-pages
