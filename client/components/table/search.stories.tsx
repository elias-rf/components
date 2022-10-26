import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent, Schema, Where } from "../../../types";
import { Search } from "./search";

export default {
  title: "Components/Table/Search",
  component: Search,
  argTypes: {
    onWhere: { action: "onWhere" },
    showWhere: { monitor: "where" },
  },
} as ComponentMeta<typeof Search>;

const schema: Schema = [
  {
    label: "ID",
    field: "id",
    name: "id",
    type: "int",
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
    field: "compra",
    name: "compra",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];

export const Default: ComponentStory<typeof Search> = (props) => {
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);

  function handleOnWhere(event: IEvent) {
    setWhere(event.value);
    props.onWhere(event);
    props.showWhere(event.value);
  }

  return (
    <div>
      {JSON.stringify(where)}
      <Search where={where} schema={schema} onWhere={handleOnWhere} />
    </div>
  );
};
