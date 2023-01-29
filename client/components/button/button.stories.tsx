import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClickEvent: { action: "onClickEvent" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Button",
  args: {
    size: "bs",
    color: "dark",
    name: "teste",
    children: "botão",
  },
  render: (args) => {
    return (
      <div className="flex space-x-2 space-y-2">
        <Button {...args}>{args.children}</Button>
      </div>
    );
  },
};
