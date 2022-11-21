import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { Textbox } from "./textbox";

export default {
  title: "Components/Form",
  component: Textbox,
  argTypes: {
    onBlur: { action: "onBlur" },
    onChange: { action: "onChange" },
    onInput: { action: "onInput" },
  },
} as ComponentMeta<typeof Textbox>;

export const Default: ComponentStory<typeof Textbox> = (props: any) => {
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
};

Default.args = {
  name: "textbox1",
};

Default.storyName = "Textbox";
