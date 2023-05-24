import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Textbox } from "./textbox";

const meta: Meta<typeof Textbox> = {
  args: {
    name: "textbox1",
  },
  component: Textbox,
  argTypes: {
    onBlur: { action: "onBlur" },
    onChange: { action: "onChange" },
    onInput: { action: "onInput" },
  },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

function TextboxState(props: any) {
  const [vlr, setVlr] = React.useState("");

  function handleBlur(e: React.FormEvent<HTMLInputElement>) {
    setVlr(e.currentTarget.value);
    if (props.onBlur) props.onBlur(e);
  }

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    setVlr(e.currentTarget.value);
    props.onInput(e);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setVlr(e.currentTarget.value);
    props.onChange(e);
  }

  return (
    <Textbox
      {...props}
      value={vlr}
      onBlur={handleBlur}
      onChange={handleChange}
      onInput={handleInput}
    />
  );
}

export const Default: Story = {
  render: (props) => <TextboxState {...props} />,
};
