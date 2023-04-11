import type { Table as TTable } from "@tanstack/react-table";

export const Foot = ({
  table,
  footRow,
  footCol,
}: {
  table: TTable<Record<string, any>>;
  footRow: any;
  footCol: any;
}) => {
  const FootRow = footRow;
  return (
    <tfoot>
      {table.getFooterGroups().map((footerGroup) => (
        <FootRow
          footerGroup={footerGroup}
          key={footerGroup.id}
          footCol={footCol}
        />
      ))}
    </tfoot>
  );
};
