import MuiTableHead from "@mui/material/TableHead";

export type TTableHeadProps = {
  children: any;
};

export function TableHead({ children }: TTableHeadProps) {
  return <MuiTableHead>{children}</MuiTableHead>;
}
