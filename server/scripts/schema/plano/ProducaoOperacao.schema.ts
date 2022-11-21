import { TTable } from "../../../../types";

export const ProducaoOperacao: TTable = {
  database: "plano",
  table: "ProducaoOperacao",
  fields: [
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "ProducaoOperacao_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
