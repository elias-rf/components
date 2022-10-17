import { TEntity } from "../../../../types";

export const Moedas: TEntity = {
  database: "plano",
  table: "Moedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "Moedas_id",
      type: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
