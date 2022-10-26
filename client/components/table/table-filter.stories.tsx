import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent, Schema, Where } from "../../../types";
import { TableFilter } from "./table-filter";

export default {
  title: "Components/Table/TableFilter",
  component: TableFilter,
  argTypes: {
    onWhere: { action: "onWhere" },
    showWhere: { monitor: "where" },
  },
} as ComponentMeta<typeof TableFilter>;

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

export const Default: ComponentStory<typeof TableFilter> = (props) => {
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);

  function handleOnWhere(e: IEvent) {
    setWhere(e.value);
    if (props.onWhere) props.onWhere(e);
    props.showWhere(e.value);
  }

  return (
    <table className={"w-full"}>
      <thead>
        <tr>
          {schema?.map((fld) => (
            <TableFilter
              key={fld.name}
              schemaField={fld}
              where={where}
              onWhere={handleOnWhere}
            />
          ))}
        </tr>
      </thead>
    </table>
  );
};
