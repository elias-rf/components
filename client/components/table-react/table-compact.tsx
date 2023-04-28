import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { BodySubRow } from "./body-sub-row";
import { HeadFilter } from "./head-filter";
import {
  Body,
  BodyCol,
  BodyRow,
  Foot,
  FootCol,
  FootRow,
  Head,
  HeadCol,
  HeadRow,
  TableReact,
} from "./index";

export const TableReactCompact = ({
  data,
  columns,
  sort,
  setSort,
  rowSelection,
  setRowSelection,
  children,
  filters,
  setFilters,
}: any) => {
  const table = useReactTable({
    columns,
    data,
    enableRowSelection: setRowSelection !== undefined,
    enableColumnFilters: setFilters !== undefined,
    enableSorting: setSort !== undefined,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters: filters || [],
      sorting: sort || [],
      rowSelection: rowSelection || {},
    },
    onSortingChange: setSort,
    onColumnFiltersChange: setFilters,
    initialState: {},

    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
  });

  return (
    <TableReact table={table}>
      {(props: any) => (
        <>
          <Head {...props}>
            {(props: any) => (
              <>
                <HeadRow {...props}>
                  {(props: any) => <HeadCol {...props} />}
                </HeadRow>
                {table.options.enableColumnFilters ? (
                  <HeadRow {...props}>
                    {(props: any) => <HeadFilter {...props} />}
                  </HeadRow>
                ) : (
                  ""
                )}
              </>
            )}
          </Head>
          <Body {...props}>
            {(props: any) => (
              <>
                <BodyRow {...props}>
                  {(props: any) => <BodyCol {...props} />}
                </BodyRow>
                {table.options.enableRowSelection ? (
                  <BodySubRow {...props}>
                    {(row: any) => children(row)}
                  </BodySubRow>
                ) : (
                  ""
                )}
              </>
            )}
          </Body>
          <Foot {...props}>
            {(props: any) => (
              <>
                <FootRow {...props}>
                  {(props: any) => <FootCol {...props} />}
                </FootRow>
              </>
            )}
          </Foot>
        </>
      )}
    </TableReact>
  );
};
