import type { Meta, StoryObj } from "@storybook/react";
import { PrecosCliente } from "./precos-cliente";

const meta: Meta<typeof PrecosCliente> = {
  component: PrecosCliente,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
};
export default meta;
type Story = StoryObj<typeof PrecosCliente>;

export const Default: Story = {};
