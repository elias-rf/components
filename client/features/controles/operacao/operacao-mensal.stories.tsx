import { Meta, StoryObj } from "@storybook/react";
import { OperacaoMensal } from "./operacao-mensal";

const meta: Meta<typeof OperacaoMensal> = {
  component: OperacaoMensal,
};
export default meta;
type Story = StoryObj<typeof OperacaoMensal>;

export const Operacao_Mensal: Story = {
  render: () => {
    return (
      <OperacaoMensal
        operacao={{ operacao: "3059" }}
        mesInicial={{ mes: "2020-01" }}
        mesCorrente={{ mes: "2020-01" }}
      />
    );
  },
};
