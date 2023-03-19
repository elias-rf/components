import { TTableDef } from "../../../../types/model";

export const FaturamentoRat: TTableDef = {
  database: "plano",
  table: "FaturamentoRat",
  fields: [
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "FaturamentoRat_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumParcela",
      label: "NumParcela",
      name: "NumParcela",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DataFaturamento",
      label: "DataFaturamento",
      name: "DataFaturamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlFaturamento",
      label: "VlFaturamento",
      name: "VlFaturamento",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
