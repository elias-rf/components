import type { Story } from "@ladle/react";
import { Input } from "./input";

export default {
  title: "Form/Input",
  component: Input,
};

const Template: Story<typeof Input> = ({ disabled, name, status }) => {
  return (
    <>
      <Input
        name={name}
        disabled={disabled}
        status={status}
      />
      {disabled}
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
