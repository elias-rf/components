import type { Story } from "@ladle/react";
import { Label } from "./label";

export default {
  title: "Form/Label",
  component: Label,
};

const Template: Story<typeof Label> = ({ name, status }) => {
  return (
    <>
      <Label
        name={name}
        status={status}
      >
        Teste
      </Label>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "valor",
  name: "textbox1",
  disabled: false,
};

Default.argTypes = {
  status: {
    options: ["success", "error", ""],
    control: { type: "select" },
  },
};
