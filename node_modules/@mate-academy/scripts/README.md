# `@mate-academy/scripts` npm package

## Usage

### Global
- install `npm i -g @mate-academy/scripts`
- use `mate-scripts migrate <projectType>` inside existing project
    - `projectType: 'layout' | 'javascripts' | 'react' | 'reactTypescripts'`(currently only `layout` supported)

### Local
- install `npm i @mate-academy/scripts` inside project
- `npx mate-scripts help` for more info

## TODO
- [x] Projects list and bulk update
- [ ] Javascript support
- [ ] React support
- [ ] React typescript support
- [ ] Async commands

## Example of using localScript:
Default repos: npm run updateRepos -- -s "npm i jest -D" -m 'Add jest in package in devDependencies'
Separate repo: npm run updateRepos -- -s "npm i jest -D" -m 'Add jest in package in devDependencies' --include "layout_enclosures"
