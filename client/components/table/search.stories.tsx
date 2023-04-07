import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import type { TFieldDef, TWhere } from "../../../types";
import { Search } from "./search";

const meta: Meta<typeof Search> = {
  component: Search,
  argTypes: {
    onWhere: { action: "onWhere" },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

const schema: TFieldDef[] = [
  {
    label: "ID",
    name: "id",
    typeField: "int",
  },
  {
    label: "Nome",
    name: "nome",
  },
  {
    label: "Valor de compra",
    name: "compra",
  },
];

function SearchStory(props: any) {
  const [where, setWhere] = React.useState<TWhere[]>([["id", "<", "4"]]);

  function handleOnWhere(where: TWhere[]) {
    setWhere(where);
    props.onWhere(where);
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        onWhere={handleOnWhere}
      />
      <JsonViewer
        rootName="where"
        value={where}
        highlightUpdates
        className="text-xs"
      />
    </div>
  );
}

export const Default: Story = {
  render: (props) => <SearchStory {...props} />,
};
