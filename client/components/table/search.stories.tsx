import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TWhere } from "../../../types";
import { TFieldDef } from "../../../types/model";
import { Search } from "./search";

export default {
  title: "Components/Table/Search",
  component: Search,
  argTypes: {
    onWhere: { action: "onWhere" },
    showWhere: { monitor: "where" },
  },
} as ComponentMeta<typeof Search>;

const schema: TFieldDef[] = [
  {
    label: "ID",
    name: "id",
    typeField: "int",
    labelClass: "text-left",
    fieldClass: "text-left",
  },
  {
    label: "Nome",
    name: "nome",
    labelClass: "text-center",
    fieldClass: "text-center",
    sortable: false,
  },
  {
    label: "Valor de compra",
    name: "compra",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];

export const Default: ComponentStory<typeof Search> = (props: any) => {
  const [where, setWhere] = React.useState<TWhere[]>([["id", "<", "4"]]);

  function handleOnWhere(event: any) {
    setWhere(event.value);
    props.onWhere(event);
    props.showWhere(event.value);
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        onWhere={handleOnWhere}
      />
    </div>
  );
};
