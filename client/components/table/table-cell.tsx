import { isSelected } from "../../lib/is-selected";
import { TTableCell } from "./table.types";

export function TableCell({
  schemaField,
  selected,
  record,
  selectedClassName,
}: TTableCell) {
  return (
    <td
      className={
        ("px-2 border-b border-gray-300",
        schemaField.fieldClass,
        isSelected(selected || {}, record) ? selectedClassName : null)
      }
    >
      {record[schemaField.name]}
    </td>
  );
}
