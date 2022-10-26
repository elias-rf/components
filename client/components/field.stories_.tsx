import type { Story } from "@ladle/react";
import { Field } from "./field";

export default {
  title: "Form/Field",
  component: Field,
};

const Template: Story<typeof Field> = () => {
  return (
    <>
      <form>
        <Field type="string" />
        <Field type="boolean" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const Texto = Template.bind({});

Texto.args = {
  value: "valor",
  field: "textbox1",
  type: "string",
};
