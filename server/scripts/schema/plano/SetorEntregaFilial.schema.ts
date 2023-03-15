import { TTable } from "../../../../types/model";

export const SetorEntregaFilial: TTable = {
  database: "plano",
  table: "SetorEntregaFilial",
  fields: [
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "CdSetorEntrega",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "ImpressoraOrdemSeparacao",
      label: "ImpressoraOrdemSeparacao",
      name: "ImpressoraOrdemSeparacao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
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
