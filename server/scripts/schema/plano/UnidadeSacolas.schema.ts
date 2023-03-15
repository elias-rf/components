import { TTable } from "../../../../types/model";

export const UnidadeSacolas: TTable = {
  database: "plano",
  table: "UnidadeSacolas",
  fields: [
    {
      field: "CdUnidadeSacola",
      label: "CdUnidadeSacola",
      name: "UnidadeSacolas_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 70,
      allowNull: false,
    },
    {
      field: "PercentualAcrescimo",
      label: "PercentualAcrescimo",
      name: "PercentualAcrescimo",
      typeField: "int",
      size: 5,
      scale: 2,
      allowNull: false,
    },
  ],
};
