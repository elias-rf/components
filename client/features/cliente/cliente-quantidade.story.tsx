import type { Meta, StoryObj } from "@storybook/react";
import { ClienteQuantidade } from "./cliente-quantidade";

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
  args: {
    id: 1,
  },
};

export default meta;
type Story = StoryObj<typeof ClienteQuantidade>;

export const Quantidade: Story = {
  render: (props: any) => {
    return (
      <ClienteQuantidade
        id={props.id}
        dia="2020-02-01"
      />
    );
  },
};
