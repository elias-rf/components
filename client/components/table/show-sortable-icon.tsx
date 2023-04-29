import { TFieldDef, TOrder } from "@mono/types";
import { orderByUtil } from "@mono/utils/schema/order-by";
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";

interface ShowSortableIconProps {
  order: TOrder[];
  fieldSchema: TFieldDef;
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
      <IconChevronUp
        stroke={1}
        size={16}
      />
    );
  }
  if (ord === "desc") {
    return (
      <IconChevronDown
        stroke={1}
        size={16}
      />
    );
  }

  return (
    <>
      <IconSelector
        stroke={1}
        size={20}
      />
      <div className="i-fluent-arrow-sort-20-regular"></div>
    </>
  );
}
