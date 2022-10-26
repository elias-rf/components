import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent, Schema } from "../../../types";
import { TableColumn } from "./table-column";

export default {
  title: "Components/Table/TableColumns",
  component: TableColumn,
  argTypes: {
    onOrder: { action: "onClick" },
    showOrderBy: { monitor: "orderBy" },
  },
} as ComponentMeta<typeof TableColumn>;

const schema: Schema = [
  {
    label: "ID",
    field: "id",
    name: "id",
    type: "string",
    labelClass: "text-left",
    fieldClass: "text-left",
  },
  {
    label: "Nome",
    field: "nome",
    name: "nome",
    labelClass: "text-center",
    fieldClass: "text-center",
    sortable: false,
  },
  {
    label: "Valor de compra",
    name: "compra",
    field: "compra",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];

export const Default: ComponentStory<typeof TableColumn> = (props) => {
  const [orderBy, setOrderBy] = React.useState([]);

  function handleOnOrder(e: IEvent) {
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
              orderBy={orderBy}
              onOrder={handleOnOrder}
            />
          ))}
        </tr>
      </thead>
    </table>
  );
};
