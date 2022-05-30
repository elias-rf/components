import { Order } from "../../..";
import isEmpty from "../../utils/is/is-empty";

function knexOrder(
  order: Order[] = []
): { column: string; order: "asc" | "desc" }[] {
  if (isEmpty(order)) return [];
  return order.map((item) => {
    let column = item[0];
    let order = item[1];
    return { column, order };
  });
}

export default knexOrder;
