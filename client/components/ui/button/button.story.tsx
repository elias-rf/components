import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
  },
  args: {
    children: "Botão",
    disabled: false,
    color: "primary",
    size: "medium",
    variant: "contained",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props} />,
};
