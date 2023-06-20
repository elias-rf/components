import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { EstExt } from "./est-ext";

const meta: Meta<typeof EstExt> = {
  component: EstExt,
};
export default meta;
type Story = StoryObj<typeof EstExt>;

function EstExtStory() {
  const [state, setState] = React.useState({});
  return (
    <>
      <EstExt
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

export const Default: Story = { render: () => <EstExtStory /> };
