export const isBoolean = (data) => {
  return typeof data === 'boolean' || data instanceof Boolean
}

export const isNumber = (data) => {
  return typeof data === 'number' || data instanceof Number
}

export const isBigInt = (data) => {
  return typeof data === 'bigint' || data instanceof BigInt
}

export const isDate = (data) => {
  return !!data && data instanceof Date
}

export const isString = (data) => {
  return typeof data === 'string' || data instanceof String
}

export const isArray = (data) => {
  return Array.isArray(data)
}

export const isObject = (data) => {
  return data instanceof Object && data !== null
}

export const isNull = (data) => {
  return data === null
}

export const isUndefined = (data) => {
  return data === undefined
}
