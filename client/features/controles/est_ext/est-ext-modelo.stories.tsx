import type { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoExternaModelo } from "./est-ext-modelo";

const meta: Meta<typeof EsterilizacaoExternaModelo> = {
  component: EsterilizacaoExternaModelo,
};
export default meta;
type Story = StoryObj<typeof EsterilizacaoExternaModelo>;

export const Est_Ext_Modelo: Story = {
  render: () => {
    return (
      <EsterilizacaoExternaModelo
        diaCorrente={{ dia: "2020-01-01" }}
        produtoCorrente={{ produto: "cat1" }}
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
