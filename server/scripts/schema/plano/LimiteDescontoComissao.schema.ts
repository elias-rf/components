import { TEntity } from "../../../../types";

export const LimiteDescontoComissao: TEntity = {
  database: "plano",
  table: "LimiteDescontoComissao",
  schema: [
    {
      field: "PercLimite",
      label: "PercLimite",
      name: "LimiteDescontoComissao_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PercReducao",
      label: "PercReducao",
      name: "PercReducao",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
