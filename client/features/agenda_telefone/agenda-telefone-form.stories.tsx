import type { Meta, StoryObj } from "@storybook/react";
import { AgendaTelefoneForm } from "./agenda-telefone-form";

const meta: Meta<typeof AgendaTelefoneForm> = {
  component: AgendaTelefoneForm,
  args: {
    id: { agenda_telefone_id: 1 },
  },
};

export default meta;
type Story = StoryObj<typeof AgendaTelefoneForm>;

function FormState(props: any) {
  return <AgendaTelefoneForm id={props.id} />;
}

export const Form: Story = { render: (props) => <FormState {...props} /> };
