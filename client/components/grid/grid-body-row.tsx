import TableRow from "@mui/material/TableRow";

export type TGridBodyRowProps = {
  children: any;
};

export function GridBodyRow({ children, ...rest }: TGridBodyRowProps) {
  return <TableRow {...rest}>{children}</TableRow>;
}
