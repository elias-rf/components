import TableCell from "@mui/material/TableCell";
import { TColumn, TRow } from "./grid";

export type TGridBodyColProps = {
  col: TColumn;
  row: TRow;
};

export function GridBodyCol({ col, row }: TGridBodyColProps) {
  return (
    <TableCell
      align={col.align}
      variant="body"
    >
      {col.format ? col.format(row[col.name]) : row[col.name]}
    </TableCell>
  );
}
