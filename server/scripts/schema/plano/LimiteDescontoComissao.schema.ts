import { TTableDef } from "@mono/types/model";

export const LimiteDescontoComissao: TTableDef = {
  database: "plano",
  table: "LimiteDescontoComissao",
  fields: [
    {
      field: "PercLimite",
      label: "PercLimite",
      name: "LimiteDescontoComissao_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PercReducao",
      label: "PercReducao",
      name: "PercReducao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
