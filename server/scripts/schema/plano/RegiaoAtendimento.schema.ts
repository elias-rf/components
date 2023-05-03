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
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 20,
    },
  ],
};
