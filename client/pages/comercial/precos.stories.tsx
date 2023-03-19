import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { usuarioService } from "../../../model/usuario/usuario.service";
import Precos from "./precos";

await usuarioService.mutation.login({ user: "elias", password: "jkl" });
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