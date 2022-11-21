import { TTable } from "../../../../types";

export const HistoricoConversao: TTable = {
  database: "plano",
  table: "HistoricoConversao",
  fields: [
    {
      field: "DtRelease",
      label: "DtRelease",
      name: "DtRelease",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtAtualizacao",
      label: "DtAtualizacao",
      name: "DtAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
