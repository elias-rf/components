import { Order } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";

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
