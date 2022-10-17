import { TEntity } from "../../../../types";

export const CotacaoMoedas: TEntity = {
  database: "plano",
  table: "CotacaoMoedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "CdMoeda",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtCotacao",
      label: "DtCotacao",
      name: "DtCotacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlCotacao",
      label: "VlCotacao",
      name: "VlCotacao",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
