# @mate-academy/backstop-config

#### Link to documentation [BackstopJS](https://github.com/garris/BackstopJS)

## Install

```bash
npm install --save-dev @mate-academy/backstop-config
```

## Usage

1. Create file backstopConfig.js
2. Connect module to file:
    ```javascript
        const backstop = require('@mate-academy/backstop-config');
    ```
3. Update the test params in file backstopConfig.js.

## Example

```javascript
viewports: [{
  name: 'custom-size',
  width: 200,
  height: 50,
  }]

```

```javascript
scenarios: [{
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/hello-world/',
    }]
```
For more information on how to updated config file, look to the documentation.

## Assignment

Config file for BackstopJS. We use it for testing students HTML task.
