import type { Cell } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export const BodyCol = ({
  cell,
}: {
  cell?: Cell<Record<string, any>, unknown>;
}) => {
  if (!cell) return null;

  return (
    <td
      key={cell.id}
      className="border-y-1 border-x-0 border-solid border-gray-300"
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
