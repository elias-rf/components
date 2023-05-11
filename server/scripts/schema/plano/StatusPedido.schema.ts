import { TTableDef } from "@/types/model";

export const StatusPedido: TTableDef = {
  database: "plano",
  table: "StatusPedido",
  fields: [
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "StatusPedido_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
