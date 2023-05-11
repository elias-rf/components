import { TTableDef } from "@/types/model";

export const FaturamentoRat: TTableDef = {
  database: "plano",
  table: "FaturamentoRat",
  fields: [
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "FaturamentoRat_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumParcela",
      label: "NumParcela",
      name: "NumParcela",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataFaturamento",
      label: "DataFaturamento",
      name: "DataFaturamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlFaturamento",
      label: "VlFaturamento",
      name: "VlFaturamento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
