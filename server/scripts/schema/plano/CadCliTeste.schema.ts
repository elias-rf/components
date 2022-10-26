import { TEntity } from "../../../../types";

export const CadCliTeste: TEntity = {
  database: "plano",
  table: "CadCliTeste",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliTeste_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      type: "string",
      size: 16,
      allowNull: false,
    },
  ],
};