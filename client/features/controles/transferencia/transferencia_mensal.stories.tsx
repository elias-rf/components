import { Meta, StoryObj } from "@storybook/react";
import { TransferenciaMensal } from "./transferencia_mensal";

const meta: Meta<typeof TransferenciaMensal> = {
  component: TransferenciaMensal,
};
export default meta;
type Story = StoryObj<typeof TransferenciaMensal>;

export const Transferencia_Mensal: Story = {
  render: () => {
    return <TransferenciaMensal mesCorrente={{ mes: "2021-01" }} />;
  },
};
