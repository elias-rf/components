import { TTableDef } from "@/types/model";

export const TipoContrato: TTableDef = {
  database: "plano",
  table: "TipoContrato",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipoContrato_id",
      typeField: "int",

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
      field: "fG6949",
      label: "fG6949",
      name: "fG6949",
      typeField: "string",

      allowNull: false,
    },
  ],
};
