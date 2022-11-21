import { TTable } from "../../../../types";

export const FaseSacola: TTable = {
  database: "plano",
  table: "FaseSacola",
  fields: [
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
