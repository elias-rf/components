import { isArray } from "./is-array";

export function isNonEmptyArray<T, U>(term: Array<T> | U): term is Array<T> {
  return isArray(term) && term.length > 0;
}
