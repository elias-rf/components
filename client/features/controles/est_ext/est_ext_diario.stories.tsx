import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaDiario } from "./est_ext_diario";

const meta: Meta<typeof EsterilizacaoExternaDiario> = {
  component: EsterilizacaoExternaDiario,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaDiario>;

export const Est_Ext_Diario: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaDiario
        mesCorrente={{ mes: "2021-01" }}
        diaCorrente={{ dia: "2021-01-02" }}
        onSelectEvent={(event) => console.log(event)}
      />
    );
  },
};
