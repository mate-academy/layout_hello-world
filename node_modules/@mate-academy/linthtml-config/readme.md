# @mate-academy/linthtml-config

#### A simplified linthtml-config based on standard config. [Read more](https://mate-academy.github.io/style-guides/htmlcss.html) about rules.


## Install

```bash
npm install --save-dev @mate-academy/linthtml-config
```

## Usage

Add this to your `package.json` file:

```json
{
  "scripts": {
    "lint:html": "linthtml --config ./node_modules/@mate-academy/linthtml-config/.linthtmlrc.json"
  }
}
```

Or copy config to root before:
```bash
cp ./node_modules/@mate-academy/linthtml-config/.linthtmlrc.json ./.linthtmlrc.json
```
```json
{
  "scripts": {
    "lint:html": "linthtml"
  }
}
```

And run:
```bash
npm run lint:html
```
