import { isObject } from "./is-object";

export function isNonEmptyObject<T extends object, U>(
  term: T | U
): term is NonNullable<T> {
  return isObject(term) && Object.keys(term).length > 0;
}