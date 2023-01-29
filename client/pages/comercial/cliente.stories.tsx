import type { Meta, StoryObj } from "@storybook/react";
import Cliente from "./cliente";

const meta: Meta<typeof Cliente> = {
  component: Cliente,
};

export default meta;
type Story = StoryObj<typeof Cliente>;

export const Default: Story = {};
