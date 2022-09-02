import { isInteger } from "./is-integer";

export function isNonNegativeInteger<U>(term: number | U): term is number {
  return isInteger(term) && term >= 0;
}
