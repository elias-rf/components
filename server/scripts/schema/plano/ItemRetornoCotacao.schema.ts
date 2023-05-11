import { TTableDef } from "@/types/model";

export const ItemRetornoCotacao: TTableDef = {
  database: "plano",
  table: "ItemRetornoCotacao",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercIcms",
      label: "PercIcms",
      name: "PercIcms",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFreteUnit",
      label: "VlFreteUnit",
      name: "VlFreteUnit",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
