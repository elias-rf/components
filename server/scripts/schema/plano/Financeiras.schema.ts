import { TEntity } from "../../../../types";

export const Financeiras: TEntity = {
  database: "plano",
  table: "Financeiras",
  schema: [
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "Financeiras_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
