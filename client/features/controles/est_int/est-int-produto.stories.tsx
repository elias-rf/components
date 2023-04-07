import { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoInternaProduto } from "./est-int-produto";

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
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
