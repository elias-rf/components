import { TEntity } from "../../../../types";

export const ParametrosContAcesso: TEntity = {
  database: "plano",
  table: "ParametrosContAcesso",
  fields: [
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Base",
      label: "Base",
      name: "Base",
      type: "string",
      size: 1024,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 1024,
    },
  ],
};
