import { TTableDef } from "@/types/model";

export const ProducaoOperacao: TTableDef = {
  database: "plano",
  table: "ProducaoOperacao",
  fields: [
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "ProducaoOperacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
