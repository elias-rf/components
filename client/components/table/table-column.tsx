import { twMerge } from "tailwind-merge";
import { TOrder } from "../../../types";
import { TField } from "../../../types/model";
import { orderByUtil } from "../../../utils/schema/order-by";
import { ShowSortableIcon } from "./show-sortable-icon";

export type TTableColumn = {
  schemaField: TField;
  order: TOrder[];
  onOrder?: (event: any) => void;
};

export function TableColumn({ schemaField, order, onOrder }: TTableColumn) {
  function handleOnOrder(order: TOrder[] = [], schemaField: TField) {
    if (onOrder && schemaField.sortable !== false)
      onOrder({
        name: "",
        value: orderByUtil.setUnique(order, schemaField?.name),
        event: "onOrder",
        component: "TableColumn",
      });
  }

  return (
    <th
      className={twMerge(
        "sticky top-0 p-1 border-b-1 border-gray-300 bg-gray-100",
        schemaField.labelClass,
        schemaField.sortable !== false && onOrder ? "cursor-pointer" : null
      )}
      onClick={() => handleOnOrder(order, schemaField)}
    >
      <div className={"flex items-center"}>
        {schemaField.label || schemaField.name}
        {onOrder ? (
          <ShowSortableIcon
            order={order || []}
            fieldSchema={schemaField}
          />
        ) : null}
      </div>
    </th>
  );
}
