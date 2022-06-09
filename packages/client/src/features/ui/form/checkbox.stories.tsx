import { Action } from "../../../..";
import Checkbox from "./checkbox";
import type { Story } from "@ladle/react";

export default {
  title: "Form/Checkbox",
};

const Template: Story = (props: any) => <Checkbox {...props} />;

export const Default = Template.bind({});

Default.args = {
  dispatch: (action: Action) => console.log(action),
  value: true,
  field: "checkbox",
  disabled: false,
};
