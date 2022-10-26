import { TEntity } from "../../../../types";

export const TipoContrato: TEntity = {
  database: "plano",
  table: "TipoContrato",
  schema: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipoContrato_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "fG6949",
      label: "fG6949",
      name: "fG6949",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
