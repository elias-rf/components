import { TOrder } from "../../types";
import { isEmpty } from "../identify/is_empty";

export const orderByUtil = {
  setUnique(order: TOrder[], field: string) {
    if (!Array.isArray(order) || isEmpty(field)) {
      return [];
    }
    let orderAux: TOrder = order[0];
    if (orderAux && orderAux[0] === field) {
      orderAux[1] = orderAux[1] === "asc" ? "desc" : "asc";
    } else {
      orderAux = [field, "asc"];
    }
    return [orderAux];
  },

  getSort(order: TOrder[], field: string) {
    if (isEmpty(field) || isEmpty(order)) return null;
    for (const ord of order) {
      if (ord && ord[0] === field) {
        const rsp = ord[1];
        return rsp;
      }
    }
    return null;
  },
};
