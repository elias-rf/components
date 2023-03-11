import { Meta, StoryObj } from "@storybook/react";
import { Operacao } from "./operacao";

const meta: Meta<typeof Operacao> = {
  component: Operacao,
};
export default meta;
type Story = StoryObj<typeof Operacao>;

export const Operacao_: Story = {
  render: () => {
    return <Operacao dia="2020-01-01" />;
  },
};
