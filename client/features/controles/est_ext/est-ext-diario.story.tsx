import { TSelection } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaDiario } from "./est-ext-diario";

const meta: Meta<typeof EsterilizacaoExternaDiario> = {
  component: EsterilizacaoExternaDiario,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaDiario>;

export const Est_Ext_Diario: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaDiario
        mesCorrente={[{ mes: "2020-01" }]}
        diaCorrente={[{ dia: "2020-01-01" }]}
        onSelection={(event: TSelection) => console.log(event)}
      />
    );
  },
};
