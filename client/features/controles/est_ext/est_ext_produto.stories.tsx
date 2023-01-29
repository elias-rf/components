import type { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { EsterilizacaoExternaProduto } from "./est_ext_produto";

const meta: Meta<typeof EsterilizacaoExternaProduto> = {
  component: EsterilizacaoExternaProduto,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaProduto>;

export const Est_Ext_Produto: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaProduto
        diaCorrente={{ dia: "2021-01-04" }}
        produtoCorrente={{ produto: "Metil" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
