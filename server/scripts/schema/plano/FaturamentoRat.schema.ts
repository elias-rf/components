import { TEntity } from "../../../../types";

export const FaturamentoRat: TEntity = {
  database: "plano",
  table: "FaturamentoRat",
  schema: [
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "FaturamentoRat_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumParcela",
      label: "NumParcela",
      name: "NumParcela",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DataFaturamento",
      label: "DataFaturamento",
      name: "DataFaturamento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlFaturamento",
      label: "VlFaturamento",
      name: "VlFaturamento",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
