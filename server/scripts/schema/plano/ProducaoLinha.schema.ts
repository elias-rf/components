import { TEntity } from "../../../../types";

export const ProducaoLinha: TEntity = {
  database: "plano",
  table: "ProducaoLinha",
  schema: [
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
