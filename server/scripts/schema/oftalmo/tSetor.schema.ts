import { TTableDef } from "@/types/model";

export const tSetor: TTableDef = {
  database: "oftalmo",
  table: "tSetor",
  fields: [
    {
      field: "kSetor",
      label: "kSetor",
      name: "kSetor",
      typeField: "int",

      autoIncrement: true,
      allowNull: false,
    },
    {
      field: "fkDivisao",
      label: "fkDivisao",
      name: "fkDivisao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "Setor",
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
