import MuiTableCell from "@mui/material/TableCell";
import { TColumn, TRow } from "./table";

export type TTableBodyColProps = {
  col: TColumn;
  row: TRow;
};

export function TableBodyCol({ col, row }: TTableBodyColProps) {
  return (
    <MuiTableCell
      align={col.align}
      variant="body"
    >
      {col.format ? col.format(row[col.name]) : row[col.name]}
    </MuiTableCell>
  );
}
