import { TTableDef } from "@/types/model";

export const RegiaoAtendimento: TTableDef = {
  database: "plano",
  table: "RegiaoAtendimento",
  fields: [
    {
      field: "Regiao",
      label: "Regiao",
      name: "RegiaoAtendimento_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
