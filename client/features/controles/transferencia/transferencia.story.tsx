import React from "react";
import { Transferencia } from "./transferencia";

import { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";

const meta: Meta<typeof Transferencia> = {
  component: Transferencia,
};
export default meta;
type Story = StoryObj<typeof Transferencia>;

function TransferenciaStory() {
  const [state, setState] = React.useState({});
  return (
    <>
      <Transferencia
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

export const Default: Story = { render: () => <TransferenciaStory /> };
