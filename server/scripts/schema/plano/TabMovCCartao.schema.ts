import { TTableDef } from "@/types/model";

export const TabMovCCartao: TTableDef = {
  database: "plano",
  table: "TabMovCCartao",
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
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
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
      field: "Bandeira",
      label: "Bandeira",
      name: "Bandeira",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJCredenciadora",
      label: "CNPJCredenciadora",
      name: "CNPJCredenciadora",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoIntegracao",
      label: "TipoIntegracao",
      name: "TipoIntegracao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCredenciadora",
      label: "CdCredenciadora",
      name: "CdCredenciadora",
      typeField: "int",
    },
  ],
};
