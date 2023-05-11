import { TTableDef } from "@/types/model";

export const tDivisao: TTableDef = {
  database: "oftalmo",
  table: "tDivisao",
  fields: [
    {
      field: "kDivisao",
      label: "kDivisao",
      name: "tDivisao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Divisao",
      label: "Divisao",
      name: "Divisao",
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
