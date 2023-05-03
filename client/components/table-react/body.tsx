import type { Row, Table } from "@tanstack/react-table";
import { Fragment } from "react";

type TBodyProps = {
  table: Table<any>;
  children: (props: { row: Row<Record<string, any>> }) => React.ReactNode;
};

export const Body = ({ table, children }: TBodyProps) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>{children({ row })}</Fragment>
      ))}
    </tbody>
  );
};
