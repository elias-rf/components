import type { Meta, StoryObj } from "@storybook/react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
  Table,
} from "./index";

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

type Data = { id: string; nome: string; compra: number };

const data: Data[] = [
  { id: "1", nome: "fulano", compra: 1.5 },
  { id: "2", nome: "beltrano", compra: 2.4 },
  { id: "3", nome: "cicrano", compra: 3.14 },
];

const cols: ColumnDef<Data>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Nome",
    accessorKey: "nome",
    footer: "total",
  },
  {
    header: "Valor de compra",
    accessorKey: "compra",
    footer: ({ table }) => {
      console.log(table.getRowModel().rows[0].getValue("compra"));
      const total = table
        .getRowModel()
        .rows.reduce((sum, row) => row.getValue("compra") + sum, 0);
      return total;
    },
  },
];

const TableStory = () => {
  const table = useReactTable({
    columns: cols,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table
        table={table}
        head={Head}
        headRow={HeadRow}
        headCol={HeadCol}
        body={Body}
        bodyRow={BodyRow}
        bodyCol={BodyCol}
        foot={Foot}
        footRow={FootRow}
        footCol={FootCol}
      ></Table>
    </div>
  );
};

/** TABELA SIMPLES */
export const Default: Story = {
  render: () => <TableStory />,
};
