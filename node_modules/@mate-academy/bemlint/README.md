# `@mate-academy/bemlint` npm package

## Usage
```
 $ npm install bemlint
```
next
```
 $ npx bemlint
```
## Config
file name - `bemlintrc`
```js
{
  'elementDivider': '__',
  'modifierDivider': '_',
  'ignore': [
      "node_module",
      "**/test/*.html",
  ],
  'rules': {
    'rule-id': true,
  },
}
```
## Rules
- [one-block](https://mate-academy.github.io/fed/bemlint/rules-description.html#one-block)
- [one-element](https://mate-academy.github.io/fed/bemlint/rules-description.html#one-element)
- [element-inner-parent-block](https://mate-academy.github.io/fed/bemlint/rules-description.html#element-inner-parent-block)
- [no-double-element](https://mate-academy.github.io/fed/bemlint/rules-description.html#no-double-element)
- [no-neighbour-parent-block](https://mate-academy.github.io/fed/bemlint/rules-description.html#no-neighbour-parent-block)
- [modifiable-class](https://mate-academy.github.io/fed/bemlint/rules-description.html#modifiable-class)
