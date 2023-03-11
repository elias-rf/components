import type { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { EsterilizacaoInternaDiario } from "./est_int_diario";

const meta: Meta<typeof EsterilizacaoInternaDiario> = {
  component: EsterilizacaoInternaDiario,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoInternaDiario>;

export const Est_Int_Diario: Story = {
  render: () => {
    return (
      <EsterilizacaoInternaDiario
        mesCorrente={{ mes: "2020-01" }}
        diaCorrente={{ dia: "2020-01-01" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
