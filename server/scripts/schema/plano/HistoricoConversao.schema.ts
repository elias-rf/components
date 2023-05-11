import { TTableDef } from "@/types/model";

export const HistoricoConversao: TTableDef = {
  database: "plano",
  table: "HistoricoConversao",
  fields: [
    {
      field: "DtRelease",
      label: "DtRelease",
      name: "DtRelease",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtAtualizacao",
      label: "DtAtualizacao",
      name: "DtAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
  ],
};
