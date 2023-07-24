import type { Meta, StoryObj } from "@storybook/react";
import { Permissions } from "./permissions";

const meta: Meta<typeof Permissions> = {
  component: Permissions,
};

export default meta;
type Story = StoryObj<typeof Permissions>;

const permissions = [
  { id: "prm1", label: "Editar formulário criado por você." },
  { id: "prm2", label: "Editar formulário criado por todos" },
  { id: "prm3", label: "Excluir formulário" },
  { id: "prm4", label: "Adicionar formulário" },
];

function PermissionsStory() {
  return <Permissions permissions={permissions} />;
}

export const Form: Story = {
  render: () => <PermissionsStory />,
};
