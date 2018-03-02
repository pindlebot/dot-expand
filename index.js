const deepmerge = require('deepmerge')

const get = (obj, path) => path.reduce((acc, val) => 
  acc[val] ? acc[val] : undefined, obj)

function set (obj, path, value) {
	let clone = path.slice(0)
	const end = clone.pop()
  const child = get(obj, clone)
  child[end] = value
  return obj
}

function dotExpand(dot) {
	let data = {}
  let keys = Object.keys(dot)
  
  while(keys.length) {
  	let key = keys.shift()
    let value = dot[key] 
    let path = key.split('.')
    let expanded = path.reduce((acc, val, i) => {
      if (!get(acc, path.slice(0, i))) {
        set(acc, path.slice(0, i), {})
      }
      return acc
    }, {})
    set(expanded, path, value)
    data = deepmerge(data, expanded)
  }
  return data
}

module.exports = dotExpand