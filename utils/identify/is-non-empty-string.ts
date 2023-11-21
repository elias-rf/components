import { isString } from './is-string.js'

export function isNonEmptyString<U>(term: string | U): term is string {
  return isString(term) && term.length > 0
}
