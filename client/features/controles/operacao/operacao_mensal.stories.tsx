import { Meta, StoryObj } from "@storybook/react";
import { OperacaoMensal } from "./operacao_mensal";

const meta: Meta<typeof OperacaoMensal> = {
  component: OperacaoMensal,
};
export default meta;
type Story = StoryObj<typeof OperacaoMensal>;

export const Operacao_Mensal: Story = {
  render: () => {
    return (
      <OperacaoMensal
        operacao={{ operacao: "1010" }}
        mesInicial={{ mes: "2021-01" }}
        mesCorrente={{ mes: "2021-01" }}
      />
    );
  },
};
