import { Meta, StoryObj } from "@storybook/react";
import { TransferenciaModelo } from "./transferencia_modelo";

const meta: Meta<typeof TransferenciaModelo> = {
  component: TransferenciaModelo,
};
export default meta;
type Story = StoryObj<typeof TransferenciaModelo>;

export const Transferencia_Modelo: Story = {
  render: () => {
    return <TransferenciaModelo diaCorrente={{ dia: "2021-01-04" }} />;
  },
};
