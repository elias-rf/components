import { TTable } from "../../../../types/model";

export const TitCoBrSerasaItem: TTable = {
  database: "plano",
  table: "TitCoBrSerasaItem",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
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
      field: "SiglaDocumento",
      label: "SiglaDocumento",
      name: "SiglaDocumento",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDocumento",
      label: "ItemDocumento",
      name: "ItemDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtVcto",
      label: "DtVcto",
      name: "DtVcto",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtPagto",
      label: "DtPagto",
      name: "DtPagto",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlTitulo",
      label: "VlTitulo",
      name: "VlTitulo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
