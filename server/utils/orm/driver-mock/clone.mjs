import { cloneDeep } from "lodash-es";

export function fnClone({ data, query }) {
  return { data: cloneDeep(data), query };
}
