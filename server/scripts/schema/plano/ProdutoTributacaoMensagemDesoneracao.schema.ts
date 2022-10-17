import { TEntity } from "../../../../types";

export const ProdutoTributacaoMensagemDesoneracao: TEntity = {
  database: "plano",
  table: "ProdutoTributacaoMensagemDesoneracao",
  fields: [
    {
      field: "CdBeneficioFiscal",
      label: "CdBeneficioFiscal",
      name: "ProdutoTributacaoMensagemDesoneracao_id",
      type: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdMotivoDesoneracao",
      label: "CdMotivoDesoneracao",
      name: "CdMotivoDesoneracao",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
