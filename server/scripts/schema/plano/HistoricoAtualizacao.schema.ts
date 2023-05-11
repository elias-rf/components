import { TTableDef } from "@/types/model";

export const HistoricoAtualizacao: TTableDef = {
  database: "plano",
  table: "HistoricoAtualizacao",
  fields: [
    {
      field: "Funcao",
      label: "Funcao",
      name: "HistoricoAtualizacao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
