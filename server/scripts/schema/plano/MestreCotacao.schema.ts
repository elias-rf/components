import { TTableDef } from "@/types/model";

export const MestreCotacao: TTableDef = {
  database: "plano",
  table: "MestreCotacao",
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
      field: "DtCotacao",
      label: "DtCotacao",
      name: "DtCotacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumRequisicao",
      label: "NumRequisicao",
      name: "NumRequisicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
