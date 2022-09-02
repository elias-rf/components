import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

export function isObject<T extends object, U>(
  term: T | U
): term is NonNullable<T> {
  return !isNull(term) && !isUndefined(term) && typeof term === "object";
}
