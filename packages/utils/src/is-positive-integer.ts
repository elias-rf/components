import { isInteger } from "./is-integer";

export function isPositiveInteger(term: any): term is number {
  return isInteger(term) && term > 0;
}
