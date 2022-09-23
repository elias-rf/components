import type { Story } from "@ladle/react";
import { Input } from "./input";

export default {
  title: "Form/Input",
  component: Input,
};

const Template: Story<typeof Input> = () => {
  return (
    <>
      <Input name="input1" />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "valor",
  field: "textbox1",
  disabled: false,
};
