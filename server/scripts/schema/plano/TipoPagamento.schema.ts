import { TTable } from "../../../../types/model";

export const TipoPagamento: TTable = {
  database: "plano",
  table: "TipoPagamento",
  fields: [
    {
      field: "CdTipoPagamento",
      label: "CdTipoPagamento",
      name: "TipoPagamento_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
