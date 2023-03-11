import { Transferencia } from "./transferencia";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Transferencia> = {
  component: Transferencia,
};
export default meta;
type Story = StoryObj<typeof Transferencia>;

export const Transferencia_: Story = {
  render: () => {
    return <Transferencia dia="2020-01-01" />;
  },
};
