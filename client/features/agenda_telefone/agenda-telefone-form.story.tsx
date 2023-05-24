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
  return (
    <AgendaTelefoneForm
      id={props.id}
      onCreate={(rec) => {
        meta.args = meta.args ?? {};
        meta.args.id = meta.args.id ?? { agenda_telefone_id: 0 };
        meta.args.id.agenda_telefone_id = rec.agenda_telefone_id;
      }}
    />
  );
}

export const Form: Story = { render: (props) => <FormState {...props} /> };
