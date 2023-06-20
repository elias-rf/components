import { Meta, StoryObj } from "@storybook/react";
import { OperacaoProduto } from "./operacao-produto";

const meta: Meta<typeof OperacaoProduto> = {
  component: OperacaoProduto,
};
export default meta;
type Story = StoryObj<typeof OperacaoProduto>;

export const Operacao_Produto: Story = {
  render: () => {
    return (
      <OperacaoProduto
        operacao={{ operacao: "3058" }}
        dia={[{ dia: "2020-01-01" }]}
        produtoCorrente={[{ produto: "cat1" }]}
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
