import type { Meta, StoryObj } from "@storybook/react";
import { ClienteValorMedio } from "./cliente_valor_medio";

const meta: Meta<typeof ClienteValorMedio> = {
  component: ClienteValorMedio,
  args: {
    id: { cliente_id: 189 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteValorMedio>;

export const ValorMedio: Story = {
  render: (props: any) => {
    return <ClienteValorMedio id={props.id} />;
  },
};
