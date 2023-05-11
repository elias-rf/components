import { TTableDef } from "@/types/model";

export const TipoPagamento: TTableDef = {
  database: "plano",
  table: "TipoPagamento",
  fields: [
    {
      field: "CdTipoPagamento",
      label: "CdTipoPagamento",
      name: "TipoPagamento_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
