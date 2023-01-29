import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  // title: "Components/Form/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

function CheckboxState(props: any) {
  const [vlr, setVlr] = React.useState(true);

  function handleBlur(e: TEvent) {
    setVlr(e.value);
    if (props.onBlurEvent) props.onBlurEvent(e);
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
    <Checkbox
      name="checkbox"
      value={vlr}
      onBlurEvent={handleBlur}
      onChangeEvent={handleChange}
      onInputEvent={handleInput}
    />
  );
}

export const Default: Story = {
  name: "Checkbox",
  render: (props) => <CheckboxState {...props} />,
};
