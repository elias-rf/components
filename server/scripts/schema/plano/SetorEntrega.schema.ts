import { TEntity } from "../../../../types";

export const SetorEntrega: TEntity = {
  database: "plano",
  table: "SetorEntrega",
  schema: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "SetorEntrega_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoSetorEntrega",
      label: "DescricaoSetorEntrega",
      name: "DescricaoSetorEntrega",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "FgEntregaFutura",
      label: "FgEntregaFutura",
      name: "FgEntregaFutura",
      type: "string",
      size: 1,
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
