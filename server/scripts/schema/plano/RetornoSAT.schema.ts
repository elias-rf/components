import { TTable } from "../../../../types/model";

export const RetornoSAT: TTable = {
  database: "plano",
  table: "RetornoSAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumChave",
      label: "NumChave",
      name: "NumChave",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlTotalCfe",
      label: "VlTotalCfe",
      name: "VlTotalCfe",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CpfCnpj",
      label: "CpfCnpj",
      name: "CpfCnpj",
      typeField: "string",
      size: 24,
      allowNull: false,
    },
    {
      field: "AssinaturaQrCode",
      label: "AssinaturaQrCode",
      name: "AssinaturaQrCode",
      typeField: "string",
      size: 4096,
      allowNull: false,
    },
  ],
};
