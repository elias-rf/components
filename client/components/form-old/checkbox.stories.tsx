import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  // title: "Components/Form/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

function CheckboxState(props: any) {
  const [vlr, setVlr] = React.useState<string>();

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    setVlr(e.target.value);
    if (props.onBlurEvent) props.onBlur(e);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setVlr(e.target.value);
    props.onInput(e);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVlr(e.target.value);
    props.onChange(e);
  }

  return (
    <Checkbox
      name="checkbox"
      value={vlr}
      onBlur={handleBlur}
      onChange={handleChange}
      onInput={handleInput}
    />
  );
}

export const Default: Story = {
  name: "Checkbox",
  render: (props) => <CheckboxState {...props} />,
};
