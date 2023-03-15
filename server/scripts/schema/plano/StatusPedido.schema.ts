import { TTable } from "../../../../types/model";

export const StatusPedido: TTable = {
  database: "plano",
  table: "StatusPedido",
  fields: [
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "StatusPedido_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
  ],
};
