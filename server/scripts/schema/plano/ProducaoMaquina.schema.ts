import { TTable } from "../../../../types";

export const ProducaoMaquina: TTable = {
  database: "plano",
  table: "ProducaoMaquina",
  fields: [
    {
      field: "CdMaquina",
      label: "CdMaquina",
      name: "ProducaoMaquina_id",
      type: "string",
      size: 8,
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
