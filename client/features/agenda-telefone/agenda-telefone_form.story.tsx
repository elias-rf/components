import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { AgendaTelefoneForm } from "./agenda-telefone_form";

const meta: Meta<typeof AgendaTelefoneForm> = {
  component: AgendaTelefoneForm,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefoneForm>;

function AgendaTelefoneFormStory() {
  const form = useForm({
    mode: "onTouched",
    defaultValues: { agenda_telefone_id: "", nome: "", setor: "", email: "" },
  });
  return (
    <AgendaTelefoneForm
      form={form}
      status={"view"}
    />
  );
}

export const Form: Story = {
  render: () => <AgendaTelefoneFormStory />,
};
