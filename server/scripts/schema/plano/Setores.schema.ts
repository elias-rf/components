import { TTable } from "../../../../types";

export const Setores: TTable = {
  database: "plano",
  table: "Setores",
  fields: [
    {
      field: "CdSetor",
      label: "CdSetor",
      name: "Setores_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSetor",
      label: "NmSetor",
      name: "NmSetor",
      type: "string",
      size: 20,
    },
    {
      field: "ModeloPedido",
      label: "ModeloPedido",
      name: "ModeloPedido",
      type: "string",
      size: 32,
    },
  ],
};
