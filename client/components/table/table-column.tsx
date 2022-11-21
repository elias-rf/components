import { twMerge } from "tailwind-merge";
import { TFieldClient, TOrder } from "../../../types";
import { orderByUtil } from "../../../utils/schema/order-by";
import { ShowSortableIcon } from "./show-sortable-icon";
import { TTableColumn } from "./table.types";

export function TableColumn({
  schemaField,
  order,
  onOrderEvent,
}: TTableColumn) {
  function handleOnOrder(order: TOrder[] = [], schemaField: TFieldClient) {
    if (onOrderEvent && schemaField.sortable !== false)
      onOrderEvent({
        name: "",
        value: orderByUtil.setUnique(order, schemaField?.name),
        event: "onOrderEvent",
        component: "TableColumn",
      });
  }

  return (
    <th
      className={twMerge(
        "sticky top-0 p-1 border-b-1 border-gray-300 bg-gray-100",
        schemaField.labelClass,
        schemaField.sortable !== false && onOrderEvent ? "cursor-pointer" : null
      )}
      onClick={() => handleOnOrder(order, schemaField)}
    >
      <div className="flex items-center">
        {schemaField.label || schemaField.name}
        {onOrderEvent ? (
          <ShowSortableIcon order={order || []} fieldSchema={schemaField} />
        ) : null}
      </div>
    </th>
  );
}
