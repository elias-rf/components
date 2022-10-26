import type { Story } from "@ladle/react";
import { Formfield } from "./formfield";

export default {
  title: "Form/Formfield",
  component: Formfield,
};

const Template: Story<typeof Formfield> = () => {
  return (
    <>
      <form>
        <Formfield type="string" />
        <Formfield type="boolean" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const Texto = Template.bind({});

Texto.args = {
  value: "valor",
  schema: { field: "textbox", label: "Textbox", type: "string" },
};
