import { Order } from "@er/types";
import { isEmpty } from "./is-empty";

export const orderBy = {
  setUnique(order: Order[], field: string) {
    if (!Array.isArray(order) || isEmpty(field)) {
      return [];
    }
    let orderBy: Order = order[0];
    if (orderBy && orderBy[0] === field) {
      orderBy[1] = orderBy[1] === "asc" ? "desc" : "asc";
    } else {
      orderBy = [field, "asc"];
    }
    return [orderBy];
  },

  getSort(order: Order[], field: string) {
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
