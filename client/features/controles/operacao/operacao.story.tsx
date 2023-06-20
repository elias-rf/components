import { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { Operacao } from "./operacao";

const meta: Meta<typeof Operacao> = {
  component: Operacao,
};
export default meta;
type Story = StoryObj<typeof Operacao>;

function OperacaoStory() {
  const [state, setState] = React.useState({});
  return (
    <>
      <Operacao
        onState={setState}
        dia="2020-01-01"
      />
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
}

export const Default: Story = { render: () => <OperacaoStory /> };
