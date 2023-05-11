import { TTableDef } from "@/types/model";

export const ItensSubstituicao: TTableDef = {
  database: "plano",
  table: "ItensSubstituicao",
  fields: [
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEntrada",
      label: "DtEntrada",
      name: "DtEntrada",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumNfEntrada",
      label: "NumNfEntrada",
      name: "NumNfEntrada",
      typeField: "int",
    },
    {
      field: "SerieNfEntrada",
      label: "SerieNfEntrada",
      name: "SerieNfEntrada",
      typeField: "string",
    },
    {
      field: "VlSubstituido",
      label: "VlSubstituido",
      name: "VlSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIcmsSubstituido",
      label: "VlIcmsSubstituido",
      name: "VlIcmsSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtSaida",
      label: "DtSaida",
      name: "DtSaida",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumNfSaida",
      label: "NumNfSaida",
      name: "NumNfSaida",
      typeField: "int",
    },
    {
      field: "SerieNfSaida",
      label: "SerieNfSaida",
      name: "SerieNfSaida",
      typeField: "string",
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
    },
  ],
};
