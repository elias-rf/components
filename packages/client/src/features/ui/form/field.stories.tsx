import { Action } from "../../../..";
import Field from "./field";
import type { Story } from "@ladle/react";

export default {
  title: "Form/Field",
};

const Template: Story = (props: any) => <Field {...props} />;

export const Texto = Template.bind({});

Texto.args = {
  dispatch: (action: Action) => console.log(action),
  value: "valor",
  type: "string",
  disabled: false,
};

export const Booleano = Template.bind({});

Booleano.args = {
  dispatch: (action: Action) => console.log(action),
  value: true,
  type: "boolean",
  disabled: false,
};
