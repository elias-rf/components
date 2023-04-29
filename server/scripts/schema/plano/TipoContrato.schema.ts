import { TTableDef } from "@mono/types/model";

export const TipoContrato: TTableDef = {
  database: "plano",
  table: "TipoContrato",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipoContrato_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "fG6949",
      label: "fG6949",
      name: "fG6949",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
