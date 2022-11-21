import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent, TFieldClient, TWhere } from "../../../types";
import { TableFilter } from "./table-filter";

export default {
  title: "Components/Table/TableFilter",
  component: TableFilter,
} as ComponentMeta<typeof TableFilter>;

const schema: TFieldClient[] = [
  {
    label: "ID",
    name: "id",
    type: "string",
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

export const Default: ComponentStory<typeof TableFilter> = () => {
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);

  function handleOnWhere(e: TEvent) {
    setWhere(e.value);
    action("where")(e);
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
              onWhereEvent={handleOnWhere}
            />
          ))}
        </tr>
      </thead>
    </table>
  );
};
