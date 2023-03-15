import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    name: "textbox1",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (props) => {
    return <InputAux {...props} />;
  },
};

function InputAux(props: any) {
  const [vlr, setVlr] = React.useState("");
  return (
    <>
      <Input
        {...props}
        value={vlr}
        onChangeEvent={(e: any) => setVlr(e.value)}
      />
    </>
  );
}
