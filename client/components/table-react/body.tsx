import type { Row, Table } from "@tanstack/react-table";
import { Fragment } from "react";

export const Body = ({
  table,
  children,
}: {
  table: Table<any>;
  children: (props: { row: Row<Record<string, any>> }) => React.ReactNode;
}) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>{children({ row })}</Fragment>
      ))}
    </tbody>
  );
};
