# dot-expand

## Installation

Expand key-value pairs whose keys are in dot notation (.e.g, `users.name`) into objects.

```bash
npm i dot-expand --save

yarn add dot-expand
```

## Example

```js
const expand = require('dot-expand')

const pojo = expand({
  'users.df01d9e5.name': 'Tom',
  'users.df01d9e5.age': 37
})

// => { users: { df01d9e5: { name: 'Tom', age: 37 } } }
```
