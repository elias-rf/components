import { Action } from "../../../..";
import Formfield from "./formfield";
import type { Story } from "@ladle/react";

export default {
  title: "Form/Formfield",
};

const Template: Story = (props: any) => <Formfield {...props} />;

export const Texto = Template.bind({});

Texto.args = {
  dispatch: (action: Action) => console.log(action),
  value: "valor",
  schema: { field: "textbox", label: "Textbox", type: "string" },
  disabled: false,
};

export const Booleano = Template.bind({});

Booleano.args = {
  dispatch: (action: Action) => console.log(action),
  value: true,
  schema: { field: "textbox", label: "Textbox", type: "boolean" },
  disabled: false,
};
