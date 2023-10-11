// https://github.com/jonschlinkert/is-plain-object

function isObject(o: any): boolean {
  return Object.prototype.toString.call(o) === '[object Object]'
}

/**
 * Returns true if an object was created by the Object constructor, or Object.create(null).
 */
export function isPlainObject(o: any): boolean {
  if (isObject(o) === false) return false

  // If has modified constructor
  const ctor = o.constructor
  if (ctor === undefined) return true

  // If has modified prototype
  const prot = ctor.prototype
  if (isObject(prot) === false) return false

  // If constructor does not have an Object-specific method
  if (Object.prototype.hasOwnProperty.call(prot, 'isPrototypeOf') === false) {
    return false
  }

  // Most likely a plain Object
  return true
}

/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */
export function hashObject(queryKey?: any): string {
  if (queryKey === undefined) return ''
  return JSON.stringify(queryKey, (_, val) =>
    isObject(val)
      ? Object.keys(val)
          .sort()
          .reduce((result, key) => {
            result[key] = val[key]
            return result
          }, {} as any)
      : val
  )
}
