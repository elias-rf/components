import { TFieldDef } from "@mono/types/model";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TableColumn } from "./table-column";

const meta: Meta<typeof TableColumn> = {
  component: TableColumn,
  argTypes: {
    onOrder: { action: "onClick" },
  },
};
export default meta;
type Story = StoryObj<typeof TableColumn>;

const schema: TFieldDef[] = [
  {
    label: "ID",
    name: "nid",
    typeField: "string",
    labelClass: "text-left",
    fieldClass: "text-left",
  },
  {
    label: "Nome",
    name: "nnome",
    labelClass: "text-center",
    fieldClass: "text-center",
    sortable: false,
  },
  {
    label: "Valor de compra",
    name: "ncompra",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];

const TableColumnStory = (props: any) => {
  const [orderBy, setOrderBy] = React.useState([]);

  function handleOnOrder(e: any) {
    setOrderBy(e.value);

    if (props.onOrder) props.onOrder(e);
  }

  return (
    <table className={"w-full"}>
      <thead>
        <tr>
          {schema?.map((fld) => (
            <TableColumn
              key={fld.name}
              schemaField={fld}
              order={orderBy}
              onOrder={handleOnOrder}
            />
          ))}
        </tr>
      </thead>
    </table>
  );
};

export const Default: Story = {
  render: (props) => {
    return <TableColumnStory {...props} />;
  },
};
