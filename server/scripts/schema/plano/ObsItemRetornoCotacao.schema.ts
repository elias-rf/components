import { TTable } from "../../../../types";

export const ObsItemRetornoCotacao: TTable = {
  database: "plano",
  table: "ObsItemRetornoCotacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCotacao",
      label: "NumCotacao",
      name: "NumCotacao",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 512,
    },
  ],
};
