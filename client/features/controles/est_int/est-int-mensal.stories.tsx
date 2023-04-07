import { Meta, StoryObj } from "@storybook/react";
import { EsterilizacaoInternaMensal } from "./est-int-mensal";

const meta: Meta<typeof EsterilizacaoInternaMensal> = {
  component: EsterilizacaoInternaMensal,
};

export default meta;
type Story = StoryObj<typeof EsterilizacaoInternaMensal>;

export const Est_Int_Mensal: Story = {
  render: () => {
    return (
      <EsterilizacaoInternaMensal
        mesInicial={{ mes: "2020-01" }}
        mesCorrente={{ mes: "2020-01" }}
        onSelect={(event) => console.log(event)}
      />
    );
  },
};
