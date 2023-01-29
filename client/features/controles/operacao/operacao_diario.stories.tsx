import { Meta, StoryObj } from "@storybook/react";
import { OperacaoDiario } from "./operacao_diario";

const meta: Meta<typeof OperacaoDiario> = {
  component: OperacaoDiario,
};

export default meta;
type Story = StoryObj<typeof OperacaoDiario>;

export const Operacao_Diario: Story = {
  render: () => {
    return (
      <OperacaoDiario
        operacao={{ operacao: "1010" }}
        mes={{ mes: "2021-01" }}
        diaCorrente={{ dia: "2021-01-02" }}
      />
    );
  },
};
