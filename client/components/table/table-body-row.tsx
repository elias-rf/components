import MuiTableRow from "@mui/material/TableRow";

export type TTableBodyRowProps = {
  children: any;
};

export function TableBodyRow({ children, ...rest }: TTableBodyRowProps) {
  return <MuiTableRow {...rest}>{children}</MuiTableRow>;
}
