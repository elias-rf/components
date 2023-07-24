import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    required: false,
    disabled: false,
    label: "Input text",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

function InputAux(props: any) {
  const [vlr, setVlr] = React.useState(true);
  return (
    <>
      <Checkbox
        value={vlr}
        onChange={(e: any) => setVlr(e.target.checked)}
        {...props}
      />
      <JsonViewer
        value={{
          vlr,
        }}
      />
    </>
  );
}

export const Default: Story = {
  render: (props) => {
    return <InputAux {...props} />;
  },
};
