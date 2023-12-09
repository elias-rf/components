export function omit(obj: object, keys: string[]): any {
  if (!Array.isArray(keys) || keys.length === 0) return obj as any

  return recursiveOmit(obj, keys) as any
}

function pathsAreEqual(path: string, wildcardPath: string): boolean {
  const wildcardPathPieces = wildcardPath.split('.')
  const pathWithWildcards = path
    .split('.')
    .reduce<string[]>((carry, piece, index) => {
      const add = wildcardPathPieces[index] === '*' ? '*' : piece
      carry.push(add)
      return carry
    }, [])
    .join('.')
  return pathWithWildcards === wildcardPath
}

function recursiveOmit<
  T extends Record<string, any>,
  OmittedKeys extends string[],
>(obj: T, omittedKeys: OmittedKeys, pathUntilNow = ''): T {
  if (typeof obj !== 'object') {
    return obj
  }
  return Object.entries(obj).reduce<Record<string, any>>(
    (carry, [key, value]) => {
      let path = pathUntilNow
      if (path) path += '.'
      path += key
      if (omittedKeys.some((guardPath) => pathsAreEqual(path, guardPath))) {
        return carry
      }
      // no further recursion needed
      if (typeof value !== 'object') {
        carry[key] = value
        return carry
      }
      carry[key] = recursiveOmit(obj[key], omittedKeys, path)
      return carry
    },
    {}
  ) as T
}
