import { TEntity } from "../../../../types";

export const CentroCusto: TEntity = {
  database: "plano",
  table: "CentroCusto",
  schema: [
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CentroCusto_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
  ],
};
