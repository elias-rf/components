import { OrderBy } from "@vt/types";
import { isEmpty } from "@vt/utils";

export const orderBy = {
  setUnique(order: OrderBy[], field: string) {
    if (!Array.isArray(order) || isEmpty(field)) {
      return [];
    }
    let orderBy: OrderBy = order[0];
    if (orderBy && orderBy[0] === field) {
      orderBy[1] = orderBy[1] === "asc" ? "desc" : "asc";
    } else {
      orderBy = [field, "asc"];
    }
    return [orderBy];
  },

  getSort(order: OrderBy[], field: string) {
    if (isEmpty(field) || isEmpty(order)) return [];
    for (const ord of order) {
      if (ord && ord[0] === field) {
        const rsp = ord[1];
        return rsp;
      }
    }
    return null;
  },
};
