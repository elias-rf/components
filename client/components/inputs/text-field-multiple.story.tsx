import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { TextFieldMultiple } from "./text-field-multiple";

const meta: Meta<typeof TextFieldMultiple> = {
  component: TextFieldMultiple,
  args: {
    required: true,
    label: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldMultiple>;

function InputAux(props: any) {
  const [vlr, setVlr] = React.useState(["a1"]);
  const items = ["a1", "a2"];
  const labels = ["A1", "A2"];
  function handleChange(e: any, vlr: any) {
    setVlr(vlr);
  }
  return (
    <>
      <TextFieldMultiple
        values={vlr}
        onChange={handleChange}
        items={items}
        labels={labels}
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
