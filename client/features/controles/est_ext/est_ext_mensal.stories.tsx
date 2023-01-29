import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaMensal } from "./est_ext_mensal";

const meta: Meta<typeof EsterilizacaoExternaMensal> = {
  component: EsterilizacaoExternaMensal,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaMensal>;

export const Est_Ext_Mensal: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaMensal
        mesInicial={{ mes: "2021-01" }}
        mesCorrente={{ mes: "2021-01" }}
        onSelectEvent={(event) => console.log(event)}
      />
    );
  },
};
