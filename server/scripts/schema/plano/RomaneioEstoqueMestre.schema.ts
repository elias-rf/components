import { TTable } from "../../../../types/model";

export const RomaneioEstoqueMestre: TTable = {
  database: "plano",
  table: "RomaneioEstoqueMestre",
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
      field: "NumRomaneio",
      label: "NumRomaneio",
      name: "NumRomaneio",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",
      size: 1,
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
      field: "UsuarioEmissao",
      label: "UsuarioEmissao",
      name: "UsuarioEmissao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtRetorno",
      label: "DtRetorno",
      name: "DtRetorno",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioRetorno",
      label: "UsuarioRetorno",
      name: "UsuarioRetorno",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtConferencia",
      label: "DtConferencia",
      name: "DtConferencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioConferencia",
      label: "UsuarioConferencia",
      name: "UsuarioConferencia",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtMovimento",
      label: "DtMovimento",
      name: "DtMovimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
