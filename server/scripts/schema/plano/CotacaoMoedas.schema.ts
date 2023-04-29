import { TTableDef } from "@mono/types/model";

export const CotacaoMoedas: TTableDef = {
  database: "plano",
  table: "CotacaoMoedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "CdMoeda",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtCotacao",
      label: "DtCotacao",
      name: "DtCotacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlCotacao",
      label: "VlCotacao",
      name: "VlCotacao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
