import type { Meta, StoryObj } from "@storybook/react";
import { TrpcProvider } from "../trpc-provider";
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
    <TrpcProvider>
      <AgendaTelefoneForm
        id={props.id}
        onCreate={(rec) =>
          (meta.args.id.agenda_telefone_id = rec.agenda_telefone_id)
        }
      />
    </TrpcProvider>
  );
}

export const Form: Story = { render: (props) => <FormState {...props} /> };
