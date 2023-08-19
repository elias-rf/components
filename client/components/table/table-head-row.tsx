import { TableRow as MuiTableRow } from "@mui/material";

export type TTableHeadRowProps = {
  children: any;
};

export function TableHeadRow({ children }: TTableHeadRowProps) {
  return <MuiTableRow>{children}</MuiTableRow>;
}
