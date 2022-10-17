import { TEntity } from "../../../../types";

export const HistoricoAtualizacao: TEntity = {
  database: "plano",
  table: "HistoricoAtualizacao",
  fields: [
    {
      field: "Funcao",
      label: "Funcao",
      name: "HistoricoAtualizacao_id",
      type: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
