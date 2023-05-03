import type { HeaderGroup, Table } from "@tanstack/react-table";
import { Fragment } from "react";

type THeadProps = {
  table: Table<any>;
  children: (props: {
    headerGroup: HeaderGroup<Record<string, any>>;
  }) => React.ReactNode;
};

export const Head = ({ table, children }: THeadProps) => {
  return (
    <thead className="sticky top-0 bg-black">
      {table.getHeaderGroups().map((headerGroup) => (
        <Fragment key={headerGroup.id}>{children({ headerGroup })}</Fragment>
      ))}
    </thead>
  );
};
