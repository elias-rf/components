import { TTableDef } from "@/types/model";

export const ProdutoTributacaoMensagemDesoneracao: TTableDef = {
  database: "plano",
  table: "ProdutoTributacaoMensagemDesoneracao",
  fields: [
    {
      field: "CdBeneficioFiscal",
      label: "CdBeneficioFiscal",
      name: "ProdutoTributacaoMensagemDesoneracao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdMotivoDesoneracao",
      label: "CdMotivoDesoneracao",
      name: "CdMotivoDesoneracao",
      typeField: "int",

      allowNull: false,
    },
  ],
};
