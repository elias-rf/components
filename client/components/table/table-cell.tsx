import type { TSelected } from "@/types";
import { twMerge } from "tailwind-merge";
import { isSelected } from "../../lib/is-selected";

export type TTableCell = {
  schemaField: { fieldClass?: string; name: string };
  selected?: TSelected;
  record: { [field: string]: any };
  selectedClassName?: string;
};

export function TableCell({
  schemaField,
  selected,
  record,
  selectedClassName,
}: TTableCell) {
  return (
    <td
      className={twMerge(
        "px-2 border-b border-gray-300",
        schemaField.fieldClass,
        isSelected(selected || {}, record) ? selectedClassName : null
      )}
    >
      {record[schemaField.name]}
    </td>
  );
}
