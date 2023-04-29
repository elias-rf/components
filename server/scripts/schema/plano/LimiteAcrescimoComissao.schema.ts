import { TTableDef } from "@mono/types/model";

export const LimiteAcrescimoComissao: TTableDef = {
  database: "plano",
  table: "LimiteAcrescimoComissao",
  fields: [
    {
      field: "PercLimite",
      label: "PercLimite",
      name: "LimiteAcrescimoComissao_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PercAcrescimo",
      label: "PercAcrescimo",
      name: "PercAcrescimo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
