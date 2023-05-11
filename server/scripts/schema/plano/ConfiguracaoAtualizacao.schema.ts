import { TTableDef } from "@/types/model";

export const ConfiguracaoAtualizacao: TTableDef = {
  database: "plano",
  table: "ConfiguracaoAtualizacao",
  fields: [
    {
      field: "NumECF",
      label: "NumECF",
      name: "ConfiguracaoAtualizacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Caminho",
      label: "Caminho",
      name: "Caminho",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumUltLinhaMestre",
      label: "NumUltLinhaMestre",
      name: "NumUltLinhaMestre",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUltLinhaItem",
      label: "NumUltLinhaItem",
      name: "NumUltLinhaItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUltLinhaCaixa",
      label: "NumUltLinhaCaixa",
      name: "NumUltLinhaCaixa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUltLinhaFinanceiro",
      label: "NumUltLinhaFinanceiro",
      name: "NumUltLinhaFinanceiro",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUltLinhaRecebimento",
      label: "NumUltLinhaRecebimento",
      name: "NumUltLinhaRecebimento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUltLinhaDocumentoNaoFiscal",
      label: "NumUltLinhaDocumentoNaoFiscal",
      name: "NumUltLinhaDocumentoNaoFiscal",
      typeField: "int",
    },
    {
      field: "NumUltLinhaMeiosPagamento",
      label: "NumUltLinhaMeiosPagamento",
      name: "NumUltLinhaMeiosPagamento",
      typeField: "int",
    },
  ],
};
