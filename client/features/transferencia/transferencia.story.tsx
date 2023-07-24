import type { Meta, StoryObj } from "@storybook/react";
import { Transferencia } from "./transferencia";

const meta: Meta<typeof Transferencia> = {
  component: Transferencia,
};

export default meta;
type Story = StoryObj<typeof Transferencia>;

export const Transferencia_: Story = {
  render: () => {
    return <Transferencia />;
  },
};
