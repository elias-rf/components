import { TTableDef } from "@/types/model";

export const CotacaoMoedas: TTableDef = {
  database: "plano",
  table: "CotacaoMoedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "CdMoeda",
      typeField: "string",

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
      field: "VlCotacao",
      label: "VlCotacao",
      name: "VlCotacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
