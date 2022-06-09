import { Action } from "../../../..";
import Textbox from "./textbox";
import type { Story } from "@ladle/react";

export default {
  title: "Form/Textbox",
};

const Template: Story = (props: any) => <Textbox {...props} />;

export const Default = Template.bind({});

Default.args = {
  dispatch: (action: Action) => console.log(action),
  value: "valor",
  field: "textbox",
  disabled: false,
};
