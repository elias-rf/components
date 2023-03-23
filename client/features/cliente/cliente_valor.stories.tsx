import type { Meta, StoryObj } from "@storybook/react";
import { TrpcProvider } from "../trpc-provider";
import { ClienteValor } from "./cliente_valor";

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
  args: {
    id: { cliente_id: 1 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteValor>;

export const Valor: Story = {
  render: (props: any) => {
    return (
      <TrpcProvider>
        <ClienteValor
          id={props.id}
          dia="2020-02-01"
        />
      </TrpcProvider>
    );
  },
};
