import { TTableDef } from "@/types/model";

export const IdentifSerie: TTableDef = {
  database: "plano",
  table: "IdentifSerie",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumSerieProduto",
      label: "NumSerieProduto",
      name: "NumSerieProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtLimiteGarantia",
      label: "DtLimiteGarantia",
      name: "DtLimiteGarantia",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Prazo",
      label: "Prazo",
      name: "Prazo",
      typeField: "int",
    },
    {
      field: "DtLimiteGarantiaVenda",
      label: "DtLimiteGarantiaVenda",
      name: "DtLimiteGarantiaVenda",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Status",
      label: "Status",
      name: "Status",
      typeField: "string",
    },
  ],
};
