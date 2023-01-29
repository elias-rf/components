import { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { OperacaoModelo } from "./operacao_modelo";

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
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
