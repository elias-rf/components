import { TTable } from "../../../../types/model";

export const HistoricoAtualizacao: TTable = {
  database: "plano",
  table: "HistoricoAtualizacao",
  fields: [
    {
      field: "Funcao",
      label: "Funcao",
      name: "HistoricoAtualizacao_id",
      typeField: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
