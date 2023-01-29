import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { Textbox } from "./textbox";

const meta: Meta<typeof Textbox> = {
  args: {
    name: "textbox1",
  },
  component: Textbox,
  argTypes: {
    onBlurEvent: { action: "onBlur" },
    onChangeEvent: { action: "onChange" },
    onInputEvent: { action: "onInput" },
  },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

function TextboxState(props: any) {
  const [vlr, setVlr] = React.useState("");

  function handleBlur(e: TEvent) {
    setVlr(e.value);
    if (props.onBlur) props.onBlur(e);
  }

  function handleInput(e: TEvent) {
    setVlr(e.value);
    props.onInput(e);
  }

  function handleChange(e: TEvent) {
    setVlr(e.value);
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
