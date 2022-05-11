import Datalist from "./datalist";
import React from "react";
import type { Story } from "@ladle/react";
import { Action } from "../../../types";

export default {
  title: "Form/Datalist",
};

const Template: Story = (args: any) => <Datalist {...args} />;

export const Default = Template.bind({});

Default.args = {
  schema: { field: "datalist" },
  dispatch: (action: Action) => {
    console.log(action);
  },
  value: "vlr1",
  field: "datalist",
  options: [{ value: "vlr1" }, { title: "Valor 2", value: "vlr2" }],
  disabled: false,
};
