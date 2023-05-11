import { TTableDef } from "@/types/model";

export const SetorEntregaFilial: TTableDef = {
  database: "plano",
  table: "SetorEntregaFilial",
  fields: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "CdSetorEntrega",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ImpressoraOrdemSeparacao",
      label: "ImpressoraOrdemSeparacao",
      name: "ImpressoraOrdemSeparacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
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
