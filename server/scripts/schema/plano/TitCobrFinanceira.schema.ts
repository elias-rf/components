import { TTableDef } from "@mono/types/model";

export const TitCobrFinanceira: TTableDef = {
  database: "plano",
  table: "TitCobrFinanceira",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "CdFinanceira",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "VlParcela",
      label: "VlParcela",
      name: "VlParcela",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
