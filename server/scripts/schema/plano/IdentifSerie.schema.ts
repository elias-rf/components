import { TTable } from "../../../../types/model";

export const IdentifSerie: TTable = {
  database: "plano",
  table: "IdentifSerie",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "NumSerieProduto",
      label: "NumSerieProduto",
      name: "NumSerieProduto",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DtLimiteGarantia",
      label: "DtLimiteGarantia",
      name: "DtLimiteGarantia",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Prazo",
      label: "Prazo",
      name: "Prazo",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtLimiteGarantiaVenda",
      label: "DtLimiteGarantiaVenda",
      name: "DtLimiteGarantiaVenda",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Status",
      label: "Status",
      name: "Status",
      typeField: "string",
      size: 1,
    },
  ],
};
