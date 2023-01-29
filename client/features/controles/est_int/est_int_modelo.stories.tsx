import { Meta, StoryObj } from "@storybook/react";
import { TEvent } from "../../../../types";
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
        diaCorrente={{ dia: "2021-01-08" }}
        produtoCorrente={{ produto: "LiteFlex" }}
        onSelectEvent={(event: TEvent) => console.log(event)}
      />
    );
  },
};
