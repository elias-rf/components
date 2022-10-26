import { TEntity } from "../../../../types";

export const ProducaoOperador: TEntity = {
  database: "plano",
  table: "ProducaoOperador",
  schema: [
    {
      field: "CdOperador",
      label: "CdOperador",
      name: "ProducaoOperador_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmOperador",
      label: "NmOperador",
      name: "NmOperador",
      type: "string",
      size: 64,
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
