import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { Vendas30dias } from "./vendas_30dias";

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
};

export default meta;
type Story = StoryObj<typeof Vendas30dias>;

function Vendas30Story() {
  const [state, setState] = React.useState({});
  return (
    <>
      <Vendas30dias
        onState={setState}
        dia="2020-02-01"
      />
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
}

export const Default: Story = { render: () => <Vendas30Story /> };
