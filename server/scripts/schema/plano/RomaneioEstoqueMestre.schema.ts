import { TTableDef } from "@/types/model";

export const RomaneioEstoqueMestre: TTableDef = {
  database: "plano",
  table: "RomaneioEstoqueMestre",
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
      field: "NumRomaneio",
      label: "NumRomaneio",
      name: "NumRomaneio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioEmissao",
      label: "UsuarioEmissao",
      name: "UsuarioEmissao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtRetorno",
      label: "DtRetorno",
      name: "DtRetorno",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioRetorno",
      label: "UsuarioRetorno",
      name: "UsuarioRetorno",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtConferencia",
      label: "DtConferencia",
      name: "DtConferencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioConferencia",
      label: "UsuarioConferencia",
      name: "UsuarioConferencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtMovimento",
      label: "DtMovimento",
      name: "DtMovimento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
