function omitEach(obj: { [key: string]: any }, path: string) {
  const keys = path.split('.')
  const lastKey = keys.pop() as string

  let currentObj = obj
  for (const key of keys) {
    if (Object.hasOwn(currentObj, key) && typeof currentObj[key] === 'object') {
      currentObj = currentObj[key]
    } else {
      // If any part of the path is not valid, exit the loop
      return obj
    }
  }

  if (Object.hasOwn(currentObj, lastKey)) {
    delete currentObj[lastKey]
  }

  return obj
}

export function omit(obj: { [key: string]: any }, paths: Array<string>) {
  let objAux = structuredClone(obj)

  for (const path of paths) {
    objAux = omitEach(objAux, path)
  }
  return objAux
}
