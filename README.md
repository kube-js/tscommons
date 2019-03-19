# tscommons

![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/kube-js/tscommons.svg)

## Available configs:
- tsconfig.json
- tslint.json
- jest.config.js
- prettier.config.js

## Usage:

### tsconfig.json

```js
{
  "extends": "./node_modules/@kube-js/tscommons/configs/tsconfig.json",
  // your overrides
}
```

### tslint.json

```js
{
  "extends": [
    "./node_modules/@kube-js/tscommons/configs/tslint.json",
    "tslint-config-prettier"
  ],
  "rules": {
    // your overrides
  }
}
```

### jest.config.js
```js
const baseConfig = require("@kube-js/tscommons/configs/jest.config.js");

module.exports = {
  ...baseConfig
  // your overrides
};
```

### prettier.config.js

```js
const baseConfig = require("@kube-js/tscommons/configs/prettier.config.js");

module.exports = {
  ...baseConfig
  // your overrides
};
```

Also if you are using tslint install `tslint-config-prettier`

```
npm install --save-dev tslint-config-prettier
```

Then in tslint.json add:
```js
{
  "extends": [
    "./node_modules/@kube-js/tscommons/configs/tslint.json",
    "tslint-config-prettier"
  ],
  "rules": {
    // your overrides
  }
}
```

Credits:
[ryansmith94](https://github.com/ryansmith94)
