import { isNull } from './is-null.js'
import { isUndefined } from './is-undefined.js'

export function isDefined(
  term: any
): term is number | string | boolean | bigint | symbol | object | any[] {
  return !isNull(term) && !isUndefined(term)
}
