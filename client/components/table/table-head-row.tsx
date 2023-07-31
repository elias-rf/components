import { TableRow as MuiTableRow } from "@/client/components/ui";

export type TTableHeadRowProps = {
  children: any;
};

export function TableHeadRow({ children }: TTableHeadRowProps) {
  return <MuiTableRow>{children}</MuiTableRow>;
}
