import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent } from "../../../types";
import { TextboxNumber } from "./textbox-number";

export default {
  title: "Components/TextboxNumber",
  component: TextboxNumber,
  argTypes: {
    onBlur: { action: "onBlur" },
    onChange: { action: "onChange" },
    onInput: { action: "onInput" },
  },
} as ComponentMeta<typeof TextboxNumber>;

export const Default: ComponentStory<typeof TextboxNumber> = (props) => {
  const [vlr, setVlr] = React.useState(123456789);

  function handleBlur(e: IEvent) {
    setVlr(e.value);
    props.onBlur(e);
  }

  function handleInput(e: IEvent) {
    setVlr(e.value);
    props.onInput(e);
  }

  function handleChange(e: IEvent) {
    setVlr(e.value);
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
};

Default.args = {
  value: "1",
  name: "textbox1",
  disabled: false,
};
