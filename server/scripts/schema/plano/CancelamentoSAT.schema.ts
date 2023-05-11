import { TTableDef } from "@/types/model";

export const CancelamentoSAT: TTableDef = {
  database: "plano",
  table: "CancelamentoSAT",
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
    },
    {
      field: "NumSessao",
      label: "NumSessao",
      name: "NumSessao",
      typeField: "string",
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumDocumentoSAT",
      label: "NumDocumentoSAT",
      name: "NumDocumentoSAT",
      typeField: "int",
    },
    {
      field: "CpfCnpjConsumidor",
      label: "CpfCnpjConsumidor",
      name: "CpfCnpjConsumidor",
      typeField: "string",
    },
    {
      field: "VlTotalCupom",
      label: "VlTotalCupom",
      name: "VlTotalCupom",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AssinaturaQrCode",
      label: "AssinaturaQrCode",
      name: "AssinaturaQrCode",
      typeField: "string",
    },
  ],
};
