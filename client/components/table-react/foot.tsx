import type { HeaderGroup, Table } from "@tanstack/react-table";
import React, { Fragment } from "react";

type TFootProps = {
  table: Table<Record<string, any>>;
  children: (props: {
    footerGroup: HeaderGroup<Record<string, any>>;
  }) => React.ReactNode;
};

export const Foot = ({ table, children }: TFootProps) => {
  return (
    <tfoot>
      {table.getFooterGroups().map((footerGroup) => (
        <Fragment key={footerGroup.id}>{children({ footerGroup })}</Fragment>
      ))}
    </tfoot>
  );
};
