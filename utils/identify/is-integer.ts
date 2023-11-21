import { isNumber } from './is-number.js'

export function isInteger(term: any): term is number {
  return isNumber(term) && Number.isInteger(term)
}
