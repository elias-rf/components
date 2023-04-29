import { TTableDef } from "@mono/types/model";

export const CancelamentoSAT: TTableDef = {
  database: "plano",
  table: "CancelamentoSAT",
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
    },
    {
      field: "NumSessao",
      label: "NumSessao",
      name: "NumSessao",
      typeField: "string",
      size: 32,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "NumDocumentoSAT",
      label: "NumDocumentoSAT",
      name: "NumDocumentoSAT",
      typeField: "int",
      size: 5,
    },
    {
      field: "CpfCnpjConsumidor",
      label: "CpfCnpjConsumidor",
      name: "CpfCnpjConsumidor",
      typeField: "string",
      size: 32,
    },
    {
      field: "VlTotalCupom",
      label: "VlTotalCupom",
      name: "VlTotalCupom",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AssinaturaQrCode",
      label: "AssinaturaQrCode",
      name: "AssinaturaQrCode",
      typeField: "string",
      size: 4096,
    },
  ],
};
