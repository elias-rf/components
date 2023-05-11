import { TTableDef } from "@/types/model";

export const ProducaoCorrecao: TTableDef = {
  database: "plano",
  table: "ProducaoCorrecao",
  fields: [
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "ProducaoCorrecao_id",
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
