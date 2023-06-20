import { Meta, StoryObj } from "@storybook/react";
import { TransferenciaDiario } from "./transferencia-diario";

const meta: Meta<typeof TransferenciaDiario> = {
  component: TransferenciaDiario,
};
export default meta;
type Story = StoryObj<typeof TransferenciaDiario>;

export const Transferencia_Diario: Story = {
  render: () => {
    return (
      <TransferenciaDiario
        mesCorrente={[{ mes: "2020-01" }]}
        diaCorrente={[{ dia: "2020-01-01" }]}
      />
    );
  },
};
