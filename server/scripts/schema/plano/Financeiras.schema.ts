import { TTableDef } from "@mono/types/model";

export const Financeiras: TTableDef = {
  database: "plano",
  table: "Financeiras",
  fields: [
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "Financeiras_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
