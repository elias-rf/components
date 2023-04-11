import type { Table as TTable } from "@tanstack/react-table";

export const Body = ({
  table,
  bodyRow,
  bodyCol,
}: {
  table: TTable<Record<string, any>>;
  bodyRow: any;
  bodyCol: any;
}) => {
  const BodyRow = bodyRow;
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <BodyRow
          row={row}
          key={row.id}
          bodyCol={bodyCol}
        />
      ))}
    </tbody>
  );
};
