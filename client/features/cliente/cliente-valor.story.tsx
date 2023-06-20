import type { Meta, StoryObj } from "@storybook/react";
import { ClienteValor } from "./cliente-valor";

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
  args: {
    id: 1,
  },
};

export default meta;
type Story = StoryObj<typeof ClienteValor>;

export const Valor: Story = {
  render: (props: any) => {
    return (
      <ClienteValor
        id={props.id}
        dia="2020-02-01"
      />
    );
  },
};