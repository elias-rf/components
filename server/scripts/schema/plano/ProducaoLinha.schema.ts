import { TTable } from "../../../../types";

export const ProducaoLinha: TTable = {
  database: "plano",
  table: "ProducaoLinha",
  fields: [
    {
      field: "CdLinhaProducao",
      label: "CdLinhaProducao",
      name: "ProducaoLinha_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLinhaProducao",
      label: "NmLinhaProducao",
      name: "NmLinhaProducao",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 1024,
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
