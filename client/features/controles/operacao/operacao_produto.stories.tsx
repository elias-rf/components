import { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { OperacaoProduto } from "./operacao_produto";

const meta: Meta<typeof OperacaoProduto> = {
  component: OperacaoProduto,
};
export default meta;
type Story = StoryObj<typeof OperacaoProduto>;

export const Operacao_Produto: Story = {
  render: () => {
    return (
      <OperacaoProduto
        operacao={{ operacao: "1010" }}
        dia={{ dia: "2021-01-08" }}
        produtoCorrente={{ produto: "Liteflex" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
