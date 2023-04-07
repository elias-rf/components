import { Meta, StoryObj } from "@storybook/react";
import { TransferenciaMensal } from "./transferencia-mensal";

const meta: Meta<typeof TransferenciaMensal> = {
  component: TransferenciaMensal,
};
export default meta;
type Story = StoryObj<typeof TransferenciaMensal>;

export const Transferencia_Mensal: Story = {
  render: () => {
    return (
      <TransferenciaMensal
        mesCorrente={{ mes: "2020-01" }}
        dia="2020-01-01"
      />
    );
  },
};
