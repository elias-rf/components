import { TTableDef } from "@/types/model";

export const ContasReceberChequeRenegociado: TTableDef = {
  database: "plano",
  table: "ContasReceberChequeRenegociado",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
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
      field: "SiglaDocumento",
      label: "SiglaDocumento",
      name: "SiglaDocumento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDocumento",
      label: "ItemDocumento",
      name: "ItemDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmPortador",
      label: "NmPortador",
      name: "NmPortador",
      typeField: "string",
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
