import { TTableDef } from "../../../../types/model";

export const SuporteObservacao: TTableDef = {
  database: "plano",
  table: "SuporteObservacao",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "SuporteObservacao_id",
      typeField: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 3072,
      allowNull: false,
    },
  ],
};
