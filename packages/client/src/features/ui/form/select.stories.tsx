import Select from "./select";
import React from "react";
import type { Story } from "@ladle/react";
import { Action } from "../../../..";

export default {
  title: "Form/Select",
};

const Template: Story = (args: any) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  dispatch: (action: Action) => {
    console.log(action);
  },
  value: "vlr1",
  field: "datalist",
  options: [
    { title: "Valor 1", value: "vlr1" },
    { title: "Valor 2", value: "vlr2" },
  ],
  disabled: false,
};
