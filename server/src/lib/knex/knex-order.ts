import { OrderBy } from "../../../../types";
import { isEmpty } from "../../../../utils";

export function knexOrder(
  order: OrderBy[] = []
): { column: string; order: "asc" | "desc" }[] {
  if (isEmpty(order)) return [];
  return order.map((item) => {
    let column = item[0];
    let order = item[1];
    return { column, order };
  });
}
