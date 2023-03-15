import { TTable } from "../../../../types/model";

export const ProducaoCorrecao: TTable = {
  database: "plano",
  table: "ProducaoCorrecao",
  fields: [
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "ProducaoCorrecao_id",
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
      size: 128,
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
