import { TableHead as MuiTableHead } from "@/client/components/ui";

export type TTableHeadProps = {
  children: any;
};

export function TableHead({ children }: TTableHeadProps) {
  return <MuiTableHead>{children}</MuiTableHead>;
}
