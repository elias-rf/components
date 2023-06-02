import TableHead from "@mui/material/TableHead";

export type TGridHeadProps = {
  children: any;
};

export function GridHead({ children }: TGridHeadProps) {
  return <TableHead>{children}</TableHead>;
}
