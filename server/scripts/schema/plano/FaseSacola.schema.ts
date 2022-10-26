import { TEntity } from "../../../../types";

export const FaseSacola: TEntity = {
  database: "plano",
  table: "FaseSacola",
  schema: [
    {
      field: "CdFaseSacola",
      label: "CdFaseSacola",
      name: "FaseSacola_id",
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
  ],
};
