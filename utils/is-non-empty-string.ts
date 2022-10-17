import { isString } from "./is-string";

export function isNonEmptyString<U>(term: string | U): term is string {
  return isString(term) && term.length > 0;
}
