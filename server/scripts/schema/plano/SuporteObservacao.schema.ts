import { TTableDef } from "@/types/model";

export const SuporteObservacao: TTableDef = {
  database: "plano",
  table: "SuporteObservacao",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "SuporteObservacao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
