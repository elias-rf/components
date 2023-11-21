import { isInteger } from './is-integer.js'

export function isPositiveInteger(term: any): term is number {
  return isInteger(term) && term > 0
}
