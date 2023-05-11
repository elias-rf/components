import { TTableDef } from "@/types/model";

export const SetorEntrega: TTableDef = {
  database: "plano",
  table: "SetorEntrega",
  fields: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "SetorEntrega_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoSetorEntrega",
      label: "DescricaoSetorEntrega",
      name: "DescricaoSetorEntrega",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEntregaFutura",
      label: "FgEntregaFutura",
      name: "FgEntregaFutura",
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
