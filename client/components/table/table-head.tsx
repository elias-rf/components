import { TableHead as MuiTableHead } from "@mui/material"

export type TTableHeadProps = {
  children: any;
};

export function TableHead({ children }: TTableHeadProps) {
  return <MuiTableHead>{children}</MuiTableHead>;
}
