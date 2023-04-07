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
        operacao={{ operacao: "1010" }}
        dia={{ dia: "2021-01-08" }}
        produto={{ produto: "Liteflex" }}
        onSelectEvent={(event: any) => console.log(event)}
      />
    );
  },
};
