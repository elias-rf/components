import { TSelection } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoInternaDiario } from "./est-int-diario";

const meta: Meta<typeof EsterilizacaoInternaDiario> = {
  component: EsterilizacaoInternaDiario,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoInternaDiario>;

export const Est_Int_Diario: Story = {
  render: () => {
    return (
      <EsterilizacaoInternaDiario
        mesCorrente={[{ mes: "2020-01" }]}
        diaCorrente={[{ dia: "2020-01-01" }]}
        onSelection={(event: TSelection) => console.log(event)}
      />
    );
  },
};
