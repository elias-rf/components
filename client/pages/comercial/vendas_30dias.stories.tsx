import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { usuarioService } from "../../../models/usuario/usuario.service";
import Vendas30dias from "./vendas_30dias";

await usuarioService.mutation.login({ user: "elias", password: "jkl" });

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
