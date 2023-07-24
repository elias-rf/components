import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { UsuarioForm } from "./usuario_form";

const meta: Meta<typeof UsuarioForm> = {
  component: UsuarioForm,
};

export default meta;
type Story = StoryObj<typeof UsuarioForm>;

function AgendaTelefoneFormStory() {
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      agenda_telefone_id: "",
      nome: "",
      setor: "",
      email: "",
      is_ativo: true,
      group_id: "0,20",
    },
  });
  return (
    <UsuarioForm
      form={form}
      status={"edit"}
    />
  );
}

export const Form: Story = {
  render: () => <AgendaTelefoneFormStory />,
};
