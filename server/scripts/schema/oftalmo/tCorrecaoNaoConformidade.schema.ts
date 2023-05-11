import { TTableDef } from "@/types/model";

export const tCorrecaoNaoConformidade: TTableDef = {
  database: "oftalmo",
  table: "tCorrecaoNaoConformidade",
  fields: [
    {
      field: "kCorrecao",
      label: "kCorrecao",
      name: "tCorrecaoNaoConformidade_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "string",

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
