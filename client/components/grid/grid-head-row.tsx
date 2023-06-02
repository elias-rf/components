import TableRow from "@mui/material/TableRow";

export type TGridHeadRowProps = {
  children: any;
};

export function GridHeadRow({ children }: TGridHeadRowProps) {
  return <TableRow>{children}</TableRow>;
}
