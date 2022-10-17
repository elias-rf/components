import { TEntity } from "../../../../types";

export const ProducaoNaoConformidade: TEntity = {
  database: "plano",
  table: "ProducaoNaoConformidade",
  fields: [
    {
      field: "CdNaoConformidade",
      label: "CdNaoConformidade",
      name: "ProducaoNaoConformidade_id",
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
      size: 128,
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
