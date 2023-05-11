import { TTableDef } from "@/types/model";

export const HelpExibicao: TTableDef = {
  database: "plano",
  table: "HelpExibicao",
  fields: [
    {
      field: "IdFuncao",
      label: "IdFuncao",
      name: "HelpExibicao_id",
      typeField: "string",

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
      field: "Link",
      label: "Link",
      name: "Link",
      typeField: "string",

      allowNull: false,
    },
  ],
};
