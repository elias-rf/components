import { TWhere } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { TableFilter } from "./table-filter";

const meta: Meta<typeof TableFilter> = {
  component: TableFilter,
};

export default meta;
type Story = StoryObj<typeof TableFilter>;

const schema = [
  {
    label: "ID",
    name: "id",
    typeField: "string",
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

const TableFilterStory = () => {
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);

  function handleOnWhere(where: any) {
    setWhere(where);
  }

  return (
    <>
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
      <JsonViewer
        rootName="where"
        value={where}
        highlightUpdates
        className="text-xs"
      />
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <TableFilterStory />;
  },
};
