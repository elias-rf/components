import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

export function isDefined(
  term: any
): term is number | string | boolean | bigint | symbol | object | any[] {
  return !isNull(term) && !isUndefined(term);
}
