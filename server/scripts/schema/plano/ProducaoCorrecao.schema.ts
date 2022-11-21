import { TTable } from "../../../../types";

export const ProducaoCorrecao: TTable = {
  database: "plano",
  table: "ProducaoCorrecao",
  fields: [
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "ProducaoCorrecao_id",
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
