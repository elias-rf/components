import chevronSort from "@iconify/icons-carbon/chevron-sort";
import chevronSortDown from "@iconify/icons-carbon/chevron-sort-down";
import chevronSortUp from "@iconify/icons-carbon/chevron-sort-up";
import { InlineIcon } from "@iconify/react";
import { TFieldClient, TOrder } from "../../../types";
import { orderByUtil } from "../../../utils/schema/order-by";

export function SortableIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      className={"inline text-gray-300 hover:text-gray-600"}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
    </svg>
  );
}

export function SortableAscIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      className={"inline"}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
}

export function SortableDescIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      className={"inline"}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
}

interface ShowSortableIconProps {
  order: TOrder[];
  fieldSchema: TFieldClient;
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
    return <InlineIcon icon={chevronSortUp} />;
  }
  if (ord === "desc") {
    return <InlineIcon icon={chevronSortDown} />;
  }

  return <InlineIcon icon={chevronSort} />;
}
