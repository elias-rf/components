import type { Meta, StoryObj } from "@storybook/react";
import { Vendas30dias } from "./vendas_30dias";

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
};

export default meta;
type Story = StoryObj<typeof Vendas30dias>;

export const Vendas_30_dias: Story = {};
