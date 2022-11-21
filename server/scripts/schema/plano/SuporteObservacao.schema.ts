import { TTable } from "../../../../types";

export const SuporteObservacao: TTable = {
  database: "plano",
  table: "SuporteObservacao",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "SuporteObservacao_id",
      type: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 3072,
      allowNull: false,
    },
  ],
};
