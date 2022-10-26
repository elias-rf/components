import { TEntity } from "../../../../types";

export const Exames: TEntity = {
  database: "plano",
  table: "Exames",
  schema: [
    {
      field: "CdExame",
      label: "CdExame",
      name: "Exames_id",
      type: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      type: "string",
      size: 10,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
