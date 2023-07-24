import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Precos from "./precos";

const meta: Meta<typeof Precos> = {
  component: Precos,
};

export default meta;
type Story = StoryObj<typeof Precos>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <Precos />
    </BrowserRouter>
  ),
};
