import type { Meta, StoryObj } from "@storybook/react";
import { ClienteQuantidade } from "./cliente_quantidade";

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
  args: {
    id: { cliente_id: 189 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteQuantidade>;

export const Quantidade: Story = {
  render: (props: any) => {
    return <ClienteQuantidade id={props.id} />;
  },
};
