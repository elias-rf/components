import { TTableDef } from "@mono/types/model";

export const ContasReceberChequeRenegociado: TTableDef = {
  database: "plano",
  table: "ContasReceberChequeRenegociado",
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
      field: "NmPortador",
      label: "NmPortador",
      name: "NmPortador",
      typeField: "string",
      size: 256,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
