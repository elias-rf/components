import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextField } from "./text-field";

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    required: true,
    label: "Input text",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

function InputAux(props: any) {
  const [vlr, setVlr] = React.useState("");
  return (
    <>
      <TextField
        value={vlr}
        onChange={(e: any) => setVlr(e.target.value)}
        {...props}
      />
    </>
  );
}

export const Default: Story = {
  render: (props) => {
    return <InputAux {...props} />;
  },
};
