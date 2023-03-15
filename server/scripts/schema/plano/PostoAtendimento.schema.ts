import { TTable } from "../../../../types/model";

export const PostoAtendimento: TTable = {
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
