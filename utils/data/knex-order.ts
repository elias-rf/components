import { TOrder } from "../../types";
import { isEmpty } from "../identify/is_empty";

export function knexOrder(
  order: TOrder[] = []
): { column: string; order: "asc" | "desc" }[] {
  if (isEmpty(order)) return [];
  return order.map((item) => {
    const column = item[0];
    const order = item[1];
    return { column, order };
  });
}
