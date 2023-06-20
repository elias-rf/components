import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { ClienteForm } from "./cliente-form";

const meta: Meta<typeof ClienteForm> = {
  component: ClienteForm,
};

export default meta;
type Story = StoryObj<typeof ClienteForm>;

function ClienteFormStory() {
  const form = useForm({
    defaultValues: {
      cidade: "",
      cliente_id: "",
      cnpj: "",
      data_cadastro: "",
      eh_ativo: true,
      email: "",
      identidade: "",
      nome: "",
      uf: "",
      vendedor_id: "",
    },
    mode: "onTouched",
  });
  return (
    <ClienteForm
      form={form}
      status={"view"}
    />
  );
}

export const Form: Story = {
  render: () => <ClienteFormStory />,
};
