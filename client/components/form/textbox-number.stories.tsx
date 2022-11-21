import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { TextboxNumber } from "./textbox-number";

export default {
  title: "Components/TextboxNumber",
  component: TextboxNumber,
  argTypes: {
    onBlurEvent: { action: "onBlur" },
    onChangeEvent: { action: "onChange" },
    onInputEvent: { action: "onInput" },
  },
} as ComponentMeta<typeof TextboxNumber>;

export const Default: ComponentStory<typeof TextboxNumber> = (props: any) => {
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
};

Default.args = {
  value: "1",
  name: "textbox1",
  disabled: false,
};

Default.storyName = "TextboxNumber";
