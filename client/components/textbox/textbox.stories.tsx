import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent } from "../../../types";
import { Textbox } from "./textbox";

export default {
  title: "Components/Textbox",
  component: Textbox,
  argTypes: {
    onBlur: { action: "onBlur" },
    onChange: { action: "onChange" },
    onInput: { action: "onInput" },
  },
} as ComponentMeta<typeof Textbox>;

export const Default: ComponentStory<typeof Textbox> = (props) => {
  const [vlr, setVlr] = React.useState("");

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
    <Textbox
      {...props}
      value={vlr}
      onBlur={handleBlur}
      onChange={handleChange}
      onInput={handleInput}
    />
  );
};

Default.args = {
  name: "textbox1",
};
