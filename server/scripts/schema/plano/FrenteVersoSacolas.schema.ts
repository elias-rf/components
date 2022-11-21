import { TTable } from "../../../../types";

export const FrenteVersoSacolas: TTable = {
  database: "plano",
  table: "FrenteVersoSacolas",
  fields: [
    {
      field: "CdFrenteVerso",
      label: "CdFrenteVerso",
      name: "FrenteVersoSacolas_id",
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
