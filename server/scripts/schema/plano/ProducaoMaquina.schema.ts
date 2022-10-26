import { TEntity } from "../../../../types";

export const ProducaoMaquina: TEntity = {
  database: "plano",
  table: "ProducaoMaquina",
  schema: [
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