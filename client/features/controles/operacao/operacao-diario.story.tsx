import { Meta, StoryObj } from "@storybook/react";
import { OperacaoDiario } from "./operacao-diario";

const meta: Meta<typeof OperacaoDiario> = {
  component: OperacaoDiario,
};

export default meta;
type Story = StoryObj<typeof OperacaoDiario>;

export const Operacao_Diario: Story = {
  render: () => {
    return (
      <OperacaoDiario
        operacao={{ operacao: "3059" }}
        mes={[{ mes: "2020-01" }]}
        diaCorrente={[{ dia: "2020-01-01" }]}
      />
    );
  },
};
