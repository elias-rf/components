import { TTableDef } from "../../../../types/model";

export const ProducaoMaquina: TTableDef = {
  database: "plano",
  table: "ProducaoMaquina",
  fields: [
    {
      field: "CdMaquina",
      label: "CdMaquina",
      name: "ProducaoMaquina_id",
      typeField: "string",
      size: 8,
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
