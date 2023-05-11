import { TTableDef } from "@/types/model";

export const TitCobrFinanceira: TTableDef = {
  database: "plano",
  table: "TitCobrFinanceira",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "CdFinanceira",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlParcela",
      label: "VlParcela",
      name: "VlParcela",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
