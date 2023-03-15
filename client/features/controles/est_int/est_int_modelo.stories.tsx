import { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoInternaModelo } from "./est_int_modelo";

const meta: Meta<typeof EsterilizacaoInternaModelo> = {
  component: EsterilizacaoInternaModelo,
};
export default meta;
type Story = StoryObj<typeof EsterilizacaoInternaModelo>;

export const Est_Int_Modelo: Story = {
  render: () => {
    return (
      <EsterilizacaoInternaModelo
        diaCorrente={{ dia: "2020-01-01" }}
        produtoCorrente={{ produto: "cat1" }}
        onSelect={(event: any) => console.log(event)}
      />
    );
  },
};
