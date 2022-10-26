import { TEntity } from "../../../../types";

export const UnidadeSacolas: TEntity = {
  database: "plano",
  table: "UnidadeSacolas",
  schema: [
    {
      field: "CdUnidadeSacola",
      label: "CdUnidadeSacola",
      name: "UnidadeSacolas_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 70,
      allowNull: false,
    },
    {
      field: "PercentualAcrescimo",
      label: "PercentualAcrescimo",
      name: "PercentualAcrescimo",
      type: "int",
      size: 5,
      scale: 2,
      allowNull: false,
    },
  ],
};
