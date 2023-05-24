import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextboxNumber } from "./textbox-number";

const meta: Meta<typeof TextboxNumber> = {
  component: TextboxNumber,
  argTypes: {
    onBlur: { action: "onBlur" },
    onChange: { action: "onChange" },
    onInput: { action: "onInput" },
  },
};

export default meta;
type Story = StoryObj<typeof TextboxNumber>;

function TextboxNumberState(props: any) {
  const [vlr, setVlr] = React.useState("123456789");

  function handleBlur(e: any) {
    setVlr(e.currentTarget.value);
    if (props.onBlur) props.onBlur(e);
  }

  function handleInput(e: any) {
    setVlr(e.currentTarget.value);
    props.onInput(e);
  }

  function handleChange(e: any) {
    setVlr(e.target.value);
    props.onChange(e);
  }

  return (
    <TextboxNumber
      value={vlr}
      name="textbox1"
      onBlur={handleBlur}
      onChange={handleChange}
      onInput={handleInput}
    />
  );
}

export const Default: Story = {
  args: {
    value: "1",
    name: "textbox1",
    disabled: false,
  },
  render: (props) => <TextboxNumberState {...props} />,
};
