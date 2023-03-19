import type { Meta, StoryObj } from "@storybook/react";
import { ClienteForm } from "./cliente_form";

const meta: Meta<typeof ClienteForm> = {
  component: ClienteForm,
  args: {
    id: { cliente_id: 1 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteForm>;

export const Form: Story = {
  render: (props: any) => {
    return <ClienteForm id={props.id} />;
  },
};