import { TTableDef } from "@/types/model";

export const RetornoSAT: TTableDef = {
  database: "plano",
  table: "RetornoSAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

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
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumChave",
      label: "NumChave",
      name: "NumChave",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlTotalCfe",
      label: "VlTotalCfe",
      name: "VlTotalCfe",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CpfCnpj",
      label: "CpfCnpj",
      name: "CpfCnpj",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AssinaturaQrCode",
      label: "AssinaturaQrCode",
      name: "AssinaturaQrCode",
      typeField: "string",

      allowNull: false,
    },
  ],
};
