import { TTable } from "../../../../types/model";

export const NumeroPedido: TTable = {
  database: "plano",
  table: "NumeroPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "NumeroPedido_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumUltPedido",
      label: "NumUltPedido",
      name: "NumUltPedido",
      typeField: "int",
      size: 4,
    },
  ],
};
