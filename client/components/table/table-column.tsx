import { TOrder } from "@/types";
import { TFieldDef } from "@/types/model";
import { orderByUtil } from "@/utils/schema/order-by";
import { twMerge } from "tailwind-merge";
import { ShowSortableIcon } from "./show-sortable-icon";

export type TTableColumn = {
  schemaField: TFieldDef;
  order: TOrder[];
  onOrder?: (order: TOrder[]) => void;
};

export function TableColumn({ schemaField, order, onOrder }: TTableColumn) {
  function handleOnOrder(order: TOrder[] = [], schemaField: TFieldDef) {
    if (onOrder && schemaField.sortable !== false)
      onOrder(orderByUtil.setUnique(order, schemaField?.name));
  }

  return (
    <th
      className={twMerge(
        "border-b-1 sticky top-0 border-gray-300 bg-gray-100 p-1",
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
