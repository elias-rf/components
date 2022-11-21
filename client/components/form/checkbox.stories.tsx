import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { Checkbox } from "./checkbox";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (props: any) => {
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
};

// Default.args = {
//   name: "textbox1",
// };

Default.storyName = "Checkbox";
