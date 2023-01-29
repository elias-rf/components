import type { Meta, StoryObj } from "@storybook/react";
import { ClienteValor } from "./cliente_valor";

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
  args: {
    id: { cliente_id: 189 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteValor>;

export const Valor: Story = {
  render: (props: any) => {
    return <ClienteValor id={props.id} />;
  },
};
