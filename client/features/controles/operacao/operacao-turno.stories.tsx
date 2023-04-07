import { Meta, StoryObj } from "@storybook/react";
import { OperacaoTurno } from "./operacao-turno";

const meta: Meta<typeof OperacaoTurno> = {
  component: OperacaoTurno,
};
export default meta;
type Story = StoryObj<typeof OperacaoTurno>;

export const Operacao_Turno: Story = {
  render: () => {
    return (
      <OperacaoTurno
        operacao={{ operacao: "1010" }}
        dia={{ dia: "2021-01-08" }}
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
