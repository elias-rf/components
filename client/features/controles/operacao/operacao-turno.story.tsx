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
        operacao={{ operacao: "3058" }}
        dia={[{ dia: "2020-01-01" }]}
        onSelection={(event: any) => console.log(event)}
      />
    );
  },
};
