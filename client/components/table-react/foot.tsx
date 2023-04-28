import type { HeaderGroup, Table } from "@tanstack/react-table";
import React, { Fragment } from "react";

export const Foot = ({
  table,
  children,
}: {
  table: Table<Record<string, any>>;
  children: (props: {
    footerGroup: HeaderGroup<Record<string, any>>;
  }) => React.ReactNode;
}) => {
  return (
    <tfoot>
      {table.getFooterGroups().map((footerGroup) => (
        <Fragment key={footerGroup.id}>{children({ footerGroup })}</Fragment>
      ))}
    </tfoot>
  );
};
