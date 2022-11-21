import { TTable } from "../../../../types";

export const TipoPagamento: TTable = {
  database: "plano",
  table: "TipoPagamento",
  fields: [
    {
      field: "CdTipoPagamento",
      label: "CdTipoPagamento",
      name: "TipoPagamento_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
