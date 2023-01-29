import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { TextboxNumber } from "./textbox-number";

const meta: Meta<typeof TextboxNumber> = {
  component: TextboxNumber,
  argTypes: {
    onBlurEvent: { action: "onBlur" },
    onChangeEvent: { action: "onChange" },
    onInputEvent: { action: "onInput" },
  },
};

export default meta;
type Story = StoryObj<typeof TextboxNumber>;

function TextboxNumberState(props: any) {
  const [vlr, setVlr] = React.useState(123456789);

  function handleBlur(e: TEvent) {
    setVlr(e.value);
    if (props.onBlurEvent) props.onBlur(e);
  }

  function handleInput(e: TEvent) {
    setVlr(e.value);
    props.onInputEvent(e);
  }

  function handleChange(e: TEvent) {
    setVlr(e.value);
    props.onChangeEvent(e);
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
