import type { Table as TTable } from "@tanstack/react-table";

export const Head = ({
  table,
  headRow,
  headCol,
}: {
  table: TTable<Record<string, any>>;
  headRow: any;
  headCol: any;
}) => {
  const HeadRow = headRow;
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <HeadRow
          headerGroup={headerGroup}
          headCol={headCol}
          key={headerGroup.id}
        />
      ))}
    </thead>
  );
};
