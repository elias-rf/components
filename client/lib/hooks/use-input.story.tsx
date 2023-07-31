import { Input, Stack } from "@/client/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useInput } from "./use-input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputAux = () => {
  const onInput = (value: string) => console.log(value);

  const register1 = useInput(onInput);
  const register2 = useInput(onInput);

  return (
    <Stack spacing={2}>
      <Input {...register1} />
      <Input {...register2} />
    </Stack>
  );
};

export const Default: Story = {
  render: () => {
    return <InputAux />;
  },
};
