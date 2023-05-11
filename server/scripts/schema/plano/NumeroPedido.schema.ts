import { TTableDef } from "@/types/model";

export const NumeroPedido: TTableDef = {
  database: "plano",
  table: "NumeroPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "NumeroPedido_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumUltPedido",
      label: "NumUltPedido",
      name: "NumUltPedido",
      typeField: "int",
    },
  ],
};
