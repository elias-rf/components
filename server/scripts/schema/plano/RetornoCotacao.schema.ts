import { TTableDef } from "@/types/model";

export const RetornoCotacao: TTableDef = {
  database: "plano",
  table: "RetornoCotacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCotacao",
      label: "NumCotacao",
      name: "NumCotacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtCotacao",
      label: "DtCotacao",
      name: "DtCotacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "PrazoPgto",
      label: "PrazoPgto",
      name: "PrazoPgto",
      typeField: "string",
    },
    {
      field: "PrazoEntrega",
      label: "PrazoEntrega",
      name: "PrazoEntrega",
      typeField: "string",
    },
  ],
};
