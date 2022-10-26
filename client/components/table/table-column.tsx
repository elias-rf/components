import { twMerge } from "tailwind-merge";
import { IEvent, Order, SchemaField } from "../../../types";
import { orderByUtil } from "../../../utils/schema/order-by";
import { ShowSortableIcon } from "../show-sortable-icon";

type TTableColumn = {
  schemaField: SchemaField;
  orderBy: Order[];
  onOrder?: (event: IEvent) => void;
};

export function TableColumn({ schemaField, orderBy, onOrder }: TTableColumn) {
  function handleOnOrder(orderBy: Order[] = [], schemaField: SchemaField) {
    if (onOrder && schemaField.sortable !== false)
      onOrder({
        name: "",
        value: orderByUtil.setUnique(orderBy, schemaField?.field),
        event: "order",
        component: "Table",
      });
  }

  return (
    <th
      className={twMerge(
        "sticky top-0 p-1 border-b-1 border-gray-300 bg-gray-100",
        schemaField.labelClass,
        schemaField.sortable !== false && onOrder ? "cursor-pointer" : null
      )}
      onClick={() => handleOnOrder(orderBy, schemaField)}
    >
      <div className="flex items-center">
        {schemaField.label}
        {onOrder ? (
          <ShowSortableIcon orderBy={orderBy || []} fieldSchema={schemaField} />
        ) : null}
      </div>
    </th>
  );
}
