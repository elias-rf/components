import { TField, TOrder } from "../../../types";
import { orderByUtil } from "../../../utils/schema/order-by";
import { SortIcon } from "../icons/sort-icon";

interface ShowSortableIconProps {
  order: TOrder[];
  fieldSchema: TField;
}

/**
 *
 *
 * @export
 * @param {object} { order, field } order =[{field:direction}] field = {field:string, sortable:boolean}
 * @returns {*}
 */
export function ShowSortableIcon({
  order,
  fieldSchema,
}: ShowSortableIconProps) {
  if (fieldSchema?.sortable === false) return null;

  const ord = orderByUtil.getSort(order, fieldSchema?.name);

  if (ord === "asc") {
    return (
      <SortIcon
        direction="up"
        className="w-4"
      />
    );
  }
  if (ord === "desc") {
    return (
      <SortIcon
        direction="down"
        className="w-4"
      />
    );
  }

  return (
    <SortIcon
      direction="both"
      className="w-4"
    />
  );
}
