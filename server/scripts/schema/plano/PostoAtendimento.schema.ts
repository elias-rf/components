import { TTableDef } from "../../../../types/model";

export const PostoAtendimento: TTableDef = {
  database: "plano",
  table: "PostoAtendimento",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "PostoAtendimento_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
  ],
};
