import { TTable } from "../../../../types";

export const SetorEntregaFilial: TTable = {
  database: "plano",
  table: "SetorEntregaFilial",
  fields: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "CdSetorEntrega",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "ImpressoraOrdemSeparacao",
      label: "ImpressoraOrdemSeparacao",
      name: "ImpressoraOrdemSeparacao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
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
