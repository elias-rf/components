import type { Cell } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export const BodyCol = ({
  cell,
}: {
  cell: Cell<Record<string, any>, unknown>;
}) => {
  return (
    <td key={cell.id}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
