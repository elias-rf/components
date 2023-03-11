import type { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { EsterilizacaoExternaModelo } from "./est_ext_modelo";

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
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
