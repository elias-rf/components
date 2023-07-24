import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Vendas30dias from "./vendas_30dias";

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
};

export default meta;
type Story = StoryObj<typeof Vendas30dias>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <Vendas30dias />
    </BrowserRouter>
  ),
};
