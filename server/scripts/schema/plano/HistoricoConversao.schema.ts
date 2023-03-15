import { TTable } from "../../../../types/model";

export const HistoricoConversao: TTable = {
  database: "plano",
  table: "HistoricoConversao",
  fields: [
    {
      field: "DtRelease",
      label: "DtRelease",
      name: "DtRelease",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtAtualizacao",
      label: "DtAtualizacao",
      name: "DtAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
