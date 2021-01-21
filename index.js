const set = require('lodash.set')

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = exports.expand = (obj, opts = {}) => {
  return Object.keys(obj).reduce((a, c) => {
    if (isBlackListed(c)) return a
    set(a, c, obj[c])
    return a
  }, {})
}

const isBlackListed = (string) => /__proto__|constructor|prototype/.test(string)
