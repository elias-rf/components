import { Order } from "../../types";
import { isEmpty } from "../identify/is-empty";

export const orderByUtil = {
  setUnique(orderBy: Order[], field: string) {
    if (!Array.isArray(orderBy) || isEmpty(field)) {
      return [];
    }
    let orderByAux: Order = orderBy[0];
    if (orderByAux && orderByAux[0] === field) {
      orderByAux[1] = orderByAux[1] === "asc" ? "desc" : "asc";
    } else {
      orderByAux = [field, "asc"];
    }
    return [orderByAux];
  },

  getSort(orderBy: Order[], field: string) {
    if (isEmpty(field) || isEmpty(orderBy)) return [];
    for (const ord of orderBy) {
      if (ord && ord[0] === field) {
        const rsp = ord[1];
        return rsp;
      }
    }
    return null;
  },
};
