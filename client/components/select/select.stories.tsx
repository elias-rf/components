import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { Select } from "./select";
import { SelectOptions } from "./select-options";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (props: any) => {
  const [vlr, setVlr] = React.useState("vlr1");
  function handleOnChange(e: TEvent) {
    setVlr(e.value);
    props.onChange(e);
  }

  return (
    <>
      <Select {...props} value={vlr} onChange={handleOnChange}>
        <SelectOptions {...props} />
      </Select>
    </>
  );
};

Default.args = {
  field: "select1",
  options: [
    { title: "Valor 1", value: "vlr1" },
    { title: "Valor 2", value: "vlr2" },
  ],
  disabled: false,
};

Default.storyName = "Select";
