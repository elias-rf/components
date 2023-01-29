import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./login";

const meta: Meta<typeof Login> = {
  component: Login,
  argTypes: { onInputEvent: { action: "onInputEvent" } },
  args: {
    title: "Login Teste",
    error: "Erro de teste",
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {
  render: (props) => {
    return (
      <>
        <Login {...props} />
      </>
    );
  },
};
