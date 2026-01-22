#!/usr/bin/env bash

# Build the project
npm run build

# Deploy to gh-pages branch
git add dist --force
git commit -m "Deploy to GitHub Pages" --no-verify
git subtree push --prefix dist origin gh-pages

# Clean up
git reset --soft HEAD^
git reset -- dist
