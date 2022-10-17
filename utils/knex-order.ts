import { Order } from "../types";
import { isEmpty } from "../utils/is-empty";

export function knexOrder(
  order: Order[] = []
): { column: string; order: "asc" | "desc" }[] {
  if (isEmpty(order)) return [];
  return order.map((item) => {
    const column = item[0];
    const order = item[1];
    return { column, order };
  });
}
