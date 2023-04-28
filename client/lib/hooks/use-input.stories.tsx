import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useInput } from "./use-input";

const Input = (props: any) => {
  return <input {...props} />;
};

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    name: "textbox1",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputAux = () => {
  const onInput = (value: string) => console.log(value);

  const register1 = useInput("", onInput);
  const register2 = useInput("", onInput);

  return (
    <React.StrictMode>
      <Input {...register1} />
      <Input {...register2} />
    </React.StrictMode>
  );
};

export const Default: Story = {
  render: () => {
    return <InputAux />;
  },
};
