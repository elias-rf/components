import { TTableDef } from "@mono/types/model";

export const SetorEntrega: TTableDef = {
  database: "plano",
  table: "SetorEntrega",
  fields: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "SetorEntrega_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoSetorEntrega",
      label: "DescricaoSetorEntrega",
      name: "DescricaoSetorEntrega",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "FgEntregaFutura",
      label: "FgEntregaFutura",
      name: "FgEntregaFutura",
      typeField: "string",
      size: 1,
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
