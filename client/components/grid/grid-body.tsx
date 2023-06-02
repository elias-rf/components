import TableBody from "@mui/material/TableBody";

export type TGridBodyProps = {
  children: any;
};

export function GridBody({ children }: TGridBodyProps) {
  return <TableBody>{children}</TableBody>;
}
