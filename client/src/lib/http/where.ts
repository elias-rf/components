import { Where } from "types";
import isEmpty from "../../utils/is/is-empty";

const where = {
  setUnique(whr: Where[], field: string, value: any): Where[] {
    let flag = false;
    if (!Array.isArray(whr) || isEmpty(field)) {
      return [];
    }
    let rsp = whr.map((wh) => {
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

  getValue(whr: Where[], field: string) {
    if (isEmpty(field) || isEmpty(whr)) return null;
    for (const wh of whr as Where[]) {
      if (wh && wh[0] === field) {
        const rsp = wh[2];
        return rsp;
      }
    }
    return null;
  },
};

export default where;
