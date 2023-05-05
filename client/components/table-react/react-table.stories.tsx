import type { Meta, StoryObj } from "@storybook/react";
import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  RowSelectionState,
  SortingState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
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
  TableReactCompact,
} from "./index";

const meta: Meta<typeof TableReact> = {
  component: TableReact,
};

export default meta;
type Story = StoryObj<typeof TableReact>;

type Data = {
  id: string;
  nome: string;
  compra: number;
};

const data: Data[] = [
  { id: "1", nome: "fulano", compra: 1.5 },
  { id: "2", nome: "beltrano", compra: 2.4 },
  { id: "3", nome: "cicrano", compra: 3.14 },
  { id: "4", nome: "fulano", compra: 1.5 },
  { id: "5", nome: "beltrano", compra: 2.4 },
  { id: "6", nome: "cicrano", compra: 3.14 },
  { id: "7", nome: "fulano", compra: 1.5 },
  { id: "8", nome: "beltrano", compra: 2.4 },
  { id: "9", nome: "cicrano", compra: 3.14 },
];

const cols: ColumnDef<Data>[] = [
  {
    header: "ID",
    accessorKey: "id",
    cell: ({ row, getValue }) => {
      return (
        <div>
          {row.getIsSelected() ? (
            <div className="i-fluent-chevron-down-20-regular" />
          ) : (
            <div className="i-fluent-chevron-right-20-regular" />
          )}{" "}
          {getValue() as string}
        </div>
      );
    },
  },
  {
    header: "Nome",
    accessorKey: "nome",
    footer: "total",
  },
  {
    header: "Valor de compra",
    accessorKey: "compra",
    cell: ({ getValue }) => {
      return (
        <div className="mx-2 text-right">
          {(getValue() as number).toFixed(2)}
        </div>
      );
    },
    footer: ({ table }) => {
      const total = table
        .getRowModel()
        .rows.reduce((sum, row) => (row.getValue("compra") as number) + sum, 0);
      return <div className="mx-2 text-right">{total}</div>;
    },
  },
];

const TableStory = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    columns: cols,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    state: {
      expanded,
      sorting,
      rowSelection,
    },
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    initialState: {},
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
  });

  return (
    <div>
      <div className="h-40 overflow-y-scroll">
        <TableReact table={table}>
          {(props: any) => (
            <>
              <Head {...props}>
                {(props: any) => (
                  <>
                    <HeadRow {...props}>
                      {(props: any) => <HeadCol {...props} />}
                    </HeadRow>
                    <HeadRow {...props}>
                      {(props: any) => <HeadFilter {...props} />}
                    </HeadRow>
                  </>
                )}
              </Head>
              <Body {...props}>
                {(props: any) => (
                  <>
                    <BodyRow {...props}>
                      {(props: any) => <BodyCol {...props} />}
                    </BodyRow>
                    <BodySubRow {...props}>
                      {(row: any) => (
                        <div>
                          TESTE {row.getValue("id")} {row.getValue("nome")}
                        </div>
                      )}
                    </BodySubRow>
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
      </div>

      <JsonViewer value={table.getState()} />
    </div>
  );
};

// ##########################
// COMPACT
// ##########################
const TableStoryCompact = () => {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "id", desc: true },
  ]);
  const [selection, setSelection] = React.useState<RowSelectionState>({
    "1": true,
  });
  const [filters, setFilters] = React.useState<ColumnFiltersState>([
    { id: "id", value: "314" },
  ]);

  const getRowId = (originalRow: any, index: number, parent: any) => {
    console.log(originalRow, index, parent);
    return parent
      ? [parent.id, originalRow.uniqueId].join(".")
      : originalRow.id;
  };

  return (
    <div>
      <div className="h-40 overflow-y-scroll">
        <TableReactCompact
          columns={cols}
          data={data}
          sort={sorting}
          setSort={setSorting}
          setRowSelection={setSelection}
          rowSelection={selection}
          filters={filters}
          setFilters={setFilters}
          getRowId={getRowId}
        >
          {(row: any) => (
            <div>
              ------------ TESTE {row.getValue("id")} {row.getValue("nome")}{" "}
              ----------------------------
            </div>
          )}
        </TableReactCompact>
      </div>

      <JsonViewer value={{ filters, sorting, rowSelection: selection }} />
    </div>
  );
};

// ##########################
// COMPACT SIMPLES
// ##########################
const colsSimples: ColumnDef<Data>[] = [
  {
    header: "ID",
    accessorKey: "id",
    cell: ({ getValue }) => {
      return <div className="mx-2 text-right">{getValue() as string}</div>;
    },
  },
  {
    header: "Nome",
    accessorKey: "nome",
  },
  {
    header: "Valor de compra",
    accessorKey: "compra",
    cell: ({ getValue }) => {
      return (
        <div className="mx-2 text-right">
          {(getValue() as number).toFixed(2)}
        </div>
      );
    },
  },
];

const TableStoryCompactSimples = () => {
  return (
    <div>
      <div className="h-40 overflow-y-scroll">
        <TableReactCompact
          columns={colsSimples}
          data={data}
        ></TableReactCompact>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <TableStory />,
};

export const Compact: Story = {
  render: () => <TableStoryCompact />,
};

export const CompactSimples: Story = {
  render: () => <TableStoryCompactSimples />,
};
