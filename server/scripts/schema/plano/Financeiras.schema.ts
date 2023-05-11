import { TTableDef } from "@/types/model";

export const Financeiras: TTableDef = {
  database: "plano",
  table: "Financeiras",
  fields: [
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "Financeiras_id",
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
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
