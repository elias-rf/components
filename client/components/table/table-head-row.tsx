import MuiTableRow from "@mui/material/TableRow";

export type TTableHeadRowProps = {
  children: any;
};

export function TableHeadRow({ children }: TTableHeadRowProps) {
  return <MuiTableRow>{children}</MuiTableRow>;
}
