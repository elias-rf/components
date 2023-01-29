import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { authenticationService } from "../../service/authentication.service";
import Precos from "./precos";

await authenticationService.login({ user: "elias", password: "jkl" });
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
