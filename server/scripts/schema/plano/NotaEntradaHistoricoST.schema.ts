import { TTableDef } from "@/types/model";

export const NotaEntradaHistoricoST: TTableDef = {
  database: "plano",
  table: "NotaEntradaHistoricoST",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNota",
      label: "SerieNota",
      name: "SerieNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNota",
      label: "ModeloNota",
      name: "ModeloNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoST",
      label: "VlBaseCalculoST",
      name: "VlBaseCalculoST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSST",
      label: "VlICMSST",
      name: "VlICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgSituacaoNota",
      label: "FgSituacaoNota",
      name: "FgSituacaoNota",
      typeField: "string",

      allowNull: false,
    },
  ],
};
