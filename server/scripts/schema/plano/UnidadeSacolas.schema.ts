import { TTableDef } from "@/types/model";

export const UnidadeSacolas: TTableDef = {
  database: "plano",
  table: "UnidadeSacolas",
  fields: [
    {
      field: "CdUnidadeSacola",
      label: "CdUnidadeSacola",
      name: "UnidadeSacolas_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercentualAcrescimo",
      label: "PercentualAcrescimo",
      name: "PercentualAcrescimo",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
  ],
};
