/**
 * Deep copy objects and arrays
 *
 * @param {Object/Array} target
 * @return {Object/Array} copy
 * @api public
 */

export function deepCopy(target: any) {
  if (['number', 'string', 'boolean'].includes(typeof target)) {
    return target
  }
  if (target instanceof Date) {
    return new Date(target.getTime())
  }

  var copy = target instanceof Array ? [] : {}
  walk(target, copy)
  return copy

  function walk(target: any, copy: any) {
    for (const key in target) {
      var obj = target[key]
      if (obj instanceof Date) {
        const value = new Date(obj.getTime())
        add(copy, key, value)
      } else if (obj instanceof Function) {
        const value = obj
        add(copy, key, value)
      } else if (obj instanceof Array) {
        const value: any[] = []
        const last = add(copy, key, value)
        walk(obj, last)
      } else if (obj instanceof Object) {
        const value = {}
        const last = add(copy, key, value)
        walk(obj, last)
      } else {
        const value = obj
        add(copy, key, value)
      }
    }
  }
}

/**
 * Adds a value to the copy object based on its type
 *
 * @api private
 */

function add(copy: any, key: any, value: any) {
  if (copy instanceof Array) {
    copy.push(value)
    return copy[copy.length - 1]
  } else if (copy instanceof Object) {
    copy[key] = value
    return copy[key]
  }
}
