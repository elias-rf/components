import { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { EstInt } from "./est-int";

const meta: Meta<typeof EstInt> = {
  component: EstInt,
};
export default meta;
type Story = StoryObj<typeof EstInt>;

function EstIntStory() {
  const [state, setState] = React.useState({});
  return (
    <>
      <EstInt
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

export const Default: Story = { render: () => <EstIntStory /> };
