import { TTableDef } from "@/types/model";

export const ProducaoLinha: TTableDef = {
  database: "plano",
  table: "ProducaoLinha",
  fields: [
    {
      field: "CdLinhaProducao",
      label: "CdLinhaProducao",
      name: "ProducaoLinha_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLinhaProducao",
      label: "NmLinhaProducao",
      name: "NmLinhaProducao",
      typeField: "string",

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
