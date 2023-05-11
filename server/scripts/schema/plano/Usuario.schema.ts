import { TTableDef } from "@/types/model";

export const Usuario: TTableDef = {
  database: "plano",
  table: "Usuario",
  fields: [
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "Usuario_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmUsuario",
      label: "NmUsuario",
      name: "NmUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Senha",
      label: "Senha",
      name: "Senha",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdVendedorDefalt",
      label: "CdVendedorDefalt",
      name: "CdVendedorDefalt",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdTecnicoAssoc",
      label: "CdTecnicoAssoc",
      name: "CdTecnicoAssoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdOperadorAssociado",
      label: "CdOperadorAssociado",
      name: "CdOperadorAssociado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtAlteracao",
      label: "DtAlteracao",
      name: "DtAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
  ],
};
