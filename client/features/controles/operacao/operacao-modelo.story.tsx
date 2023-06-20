import { Meta, StoryObj } from "@storybook/react";
import { OperacaoModelo } from "./operacao-modelo";

const meta: Meta<typeof OperacaoModelo> = {
  component: OperacaoModelo,
};
export default meta;
type Story = StoryObj<typeof OperacaoModelo>;

export const Operacao_Modelo: Story = {
  render: () => {
    return (
      <OperacaoModelo
        operacao={{ operacao: "3058" }}
        dia={[{ dia: "2020-01-01" }]}
        produtoCorrente={[]}
        onSelectEvent={(event: any) => console.log(event)}
      />
    );
  },
};
