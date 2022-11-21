import { TTable } from "../../../../types";

export const LimiteDescontoComissao: TTable = {
  database: "plano",
  table: "LimiteDescontoComissao",
  fields: [
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
