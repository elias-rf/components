import { isInteger } from './is-integer.js'

export function isNonNegativeInteger<U>(term: number | U): term is number {
  return isInteger(term) && term >= 0
}
