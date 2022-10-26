import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "./input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (props) => {
  const [vlr, setVlr] = React.useState("");
  return (
    <>
      <Input {...props} value={vlr} onChange={(e) => setVlr(e.value)} />
    </>
  );
};

Default.args = {
  name: "textbox1",
  disabled: false,
};
