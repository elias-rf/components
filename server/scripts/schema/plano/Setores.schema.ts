import { TTableDef } from "@/types/model";

export const Setores: TTableDef = {
  database: "plano",
  table: "Setores",
  fields: [
    {
      field: "CdSetor",
      label: "CdSetor",
      name: "Setores_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSetor",
      label: "NmSetor",
      name: "NmSetor",
      typeField: "string",
    },
    {
      field: "ModeloPedido",
      label: "ModeloPedido",
      name: "ModeloPedido",
      typeField: "string",
    },
  ],
};
