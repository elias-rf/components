import { Where } from "../../../types";
import { isEmpty } from "../../../utils/identify/is-empty";

export const whereUtil = {
  setUnique(where: Where[], field: string, value: any): Where[] {
    let flag = false;
    if (!Array.isArray(where) || isEmpty(field)) {
      return [];
    }
    let rsp = where.map((wh) => {
      if (!Array.isArray(wh)) return;
      if (wh[0] === field) {
        flag = true;
        if (isEmpty(value)) {
          return null;
        }
        return [field, "=", value];
      }
      return wh;
    });

    if (!flag && !isEmpty(value)) {
      rsp.push([field, "=", value]);
    }
    rsp = rsp.filter((wh) => Array.isArray(wh));
    return rsp as Where[];
  },
  /** Retorna o valor para o campo da lista de where */
  getValue(where: Where[], field: string) {
    if (isEmpty(field) || isEmpty(where)) return null;
    for (const wh of where as Where[]) {
      if (wh && wh[0] === field) {
        const rsp = wh[2];
        return rsp;
      }
    }
    return null;
  },
};
