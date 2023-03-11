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
        diaCorrente={{ dia: "2020-01-01" }}
        produtoCorrente={{ produto: "cat1" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
