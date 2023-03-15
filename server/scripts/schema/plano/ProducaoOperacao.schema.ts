import { TTable } from "../../../../types/model";

export const ProducaoOperacao: TTable = {
  database: "plano",
  table: "ProducaoOperacao",
  fields: [
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "ProducaoOperacao_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
