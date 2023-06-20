import { Meta, StoryObj } from "@storybook/react";
import { TransferenciaModelo } from "./transferencia-modelo";

const meta: Meta<typeof TransferenciaModelo> = {
  component: TransferenciaModelo,
};
export default meta;
type Story = StoryObj<typeof TransferenciaModelo>;

export const Transferencia_Modelo: Story = {
  render: () => {
    return <TransferenciaModelo diaCorrente={[{ dia: "2020-01-01" }]} />;
  },
};
