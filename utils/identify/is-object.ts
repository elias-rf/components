import { isNull } from './is-null.js'
import { isUndefined } from './is-undefined.js'

export function isObject<T extends object, U>(
  term: T | U
): term is NonNullable<T> {
  return !isNull(term) && !isUndefined(term) && typeof term === 'object'
}
