import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TFieldDef } from "../../../types/model";
import { TableColumn } from "./table-column";

export default {
  title: "Components/Table/TableColumns",
  component: TableColumn,
  argTypes: {
    onOrder: { action: "onClick" },
    showOrderBy: { monitor: "orderBy" },
  },
} as ComponentMeta<typeof TableColumn>;

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

export const Default: ComponentStory<typeof TableColumn> = (props: any) => {
  const [orderBy, setOrderBy] = React.useState([]);

  function handleOnOrder(e: any) {
    setOrderBy(e.value);
    props.showOrderBy(e.value);
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
