import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaProduto } from "./est-ext-produto";

const meta: Meta<typeof EsterilizacaoExternaProduto> = {
  component: EsterilizacaoExternaProduto,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaProduto>;

export const Est_Ext_Produto: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaProduto
        diaCorrente={{ dia: "2020-01-01" }}
        produtoCorrente={{ produto: "cat1" }}
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
