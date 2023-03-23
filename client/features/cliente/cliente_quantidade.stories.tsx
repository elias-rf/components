import type { Meta, StoryObj } from "@storybook/react";
import { TrpcProvider } from "../trpc-provider";
import { ClienteQuantidade } from "./cliente_quantidade";

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
  args: {
    id: { cliente_id: 1 },
  },
};

export default meta;
type Story = StoryObj<typeof ClienteQuantidade>;

export const Quantidade: Story = {
  render: (props: any) => {
    return (
      <TrpcProvider>
        <ClienteQuantidade
          id={props.id}
          dia="2020-02-01"
        />
      </TrpcProvider>
    );
  },
};
