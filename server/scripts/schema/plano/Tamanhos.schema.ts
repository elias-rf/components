import { TTableDef } from "@/types/model";

export const Tamanhos: TTableDef = {
  database: "plano",
  table: "Tamanhos",
  fields: [
    {
      field: "CdTamanho",
      label: "CdTamanho",
      name: "Tamanhos_id",
      typeField: "int",

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
