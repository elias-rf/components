import { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { OperacaoTurno } from "./operacao_turno";

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
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
