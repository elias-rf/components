import { TTableDef } from "@mono/types/model";

export const ItensSubstituicao: TTableDef = {
  database: "plano",
  table: "ItensSubstituicao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtEntrada",
      label: "DtEntrada",
      name: "DtEntrada",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "NumNfEntrada",
      label: "NumNfEntrada",
      name: "NumNfEntrada",
      typeField: "int",
      size: 4,
    },
    {
      field: "SerieNfEntrada",
      label: "SerieNfEntrada",
      name: "SerieNfEntrada",
      typeField: "string",
      size: 3,
    },
    {
      field: "VlSubstituido",
      label: "VlSubstituido",
      name: "VlSubstituido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIcmsSubstituido",
      label: "VlIcmsSubstituido",
      name: "VlIcmsSubstituido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtSaida",
      label: "DtSaida",
      name: "DtSaida",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "NumNfSaida",
      label: "NumNfSaida",
      name: "NumNfSaida",
      typeField: "int",
      size: 4,
    },
    {
      field: "SerieNfSaida",
      label: "SerieNfSaida",
      name: "SerieNfSaida",
      typeField: "string",
      size: 3,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
