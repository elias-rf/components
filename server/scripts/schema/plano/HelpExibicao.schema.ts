import { TTable } from "../../../../types/model";

export const HelpExibicao: TTable = {
  database: "plano",
  table: "HelpExibicao",
  fields: [
    {
      field: "IdFuncao",
      label: "IdFuncao",
      name: "HelpExibicao_id",
      typeField: "string",
      size: 64,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Link",
      label: "Link",
      name: "Link",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
