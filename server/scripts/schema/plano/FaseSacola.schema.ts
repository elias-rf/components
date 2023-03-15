import { TTable } from "../../../../types/model";

export const FaseSacola: TTable = {
  database: "plano",
  table: "FaseSacola",
  fields: [
    {
      field: "CdFaseSacola",
      label: "CdFaseSacola",
      name: "FaseSacola_id",
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
  ],
};
