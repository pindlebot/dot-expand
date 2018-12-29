const expand = require('../').default

it('expand should expand objects with keys in dot notation', () => {
  let out = expand({
    'users.df01d9e5.name': 'Tom',
    'users.df01d9e5.age': 37
  })
  
  expect(out).toMatchObject({
    users: {
      df01d9e5: {
        name: 'Tom',
        age: 37
      }
    }
  })
})