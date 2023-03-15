import { TTable } from "../../../../types/model";

export const ProducaoLinha: TTable = {
  database: "plano",
  table: "ProducaoLinha",
  fields: [
    {
      field: "CdLinhaProducao",
      label: "CdLinhaProducao",
      name: "ProducaoLinha_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLinhaProducao",
      label: "NmLinhaProducao",
      name: "NmLinhaProducao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 1024,
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
