import { TTableDef } from "@/types/model";

export const ProducaoNaoConformidade: TTableDef = {
  database: "plano",
  table: "ProducaoNaoConformidade",
  fields: [
    {
      field: "CdNaoConformidade",
      label: "CdNaoConformidade",
      name: "ProducaoNaoConformidade_id",
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
