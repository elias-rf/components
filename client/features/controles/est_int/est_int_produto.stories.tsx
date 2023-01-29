import { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
import { EsterilizacaoInternaProduto } from "./est_int_produto";

const meta: Meta<typeof EsterilizacaoInternaProduto> = {
  component: EsterilizacaoInternaProduto,
};
export default meta;
type Story = StoryObj<typeof EsterilizacaoInternaProduto>;

export const Est_Int_Produto: Story = {
  render: () => {
    return (
      <EsterilizacaoInternaProduto
        diaCorrente={{ dia: "2021-01-08" }}
        produtoCorrente={{ produto: "Liteflex" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
