import { isNumber } from "./is-number";

export function isInteger(term: any): term is number {
  return isNumber(term) && Number.isInteger(term);
}
