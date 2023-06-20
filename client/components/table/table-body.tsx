import MuiTableBody from "@mui/material/TableBody";

export type TTableBodyProps = {
  children: any;
};

export function TableBody({ children }: TTableBodyProps) {
  return <MuiTableBody>{children}</MuiTableBody>;
}
