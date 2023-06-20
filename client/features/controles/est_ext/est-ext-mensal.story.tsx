import { TSelection } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaMensal } from "./est-ext-mensal";

const meta: Meta<typeof EsterilizacaoExternaMensal> = {
  component: EsterilizacaoExternaMensal,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaMensal>;

export const Est_Ext_Mensal: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaMensal
        mesInicial={{ mes: "2020-01" }}
        mesCorrente={[{ mes: "2020-01" }]}
        onSelection={(event: TSelection) => console.log(event)}
      />
    );
  },
};
