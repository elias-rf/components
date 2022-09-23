import { TEntity } from "@er/types/*";

export const RomaneioEstoqueMestre: TEntity =
  {
  "database": "plano",
  "table": "RomaneioEstoqueMestre",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumRomaneio",
      "label": "NumRomaneio",
      "name": "NumRomaneio",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdLocalEstoque",
      "label": "CdLocalEstoque",
      "name": "CdLocalEstoque",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgStatus",
      "label": "FgStatus",
      "name": "FgStatus",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioEmissao",
      "label": "UsuarioEmissao",
      "name": "UsuarioEmissao",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DtRetorno",
      "label": "DtRetorno",
      "name": "DtRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioRetorno",
      "label": "UsuarioRetorno",
      "name": "UsuarioRetorno",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DtConferencia",
      "label": "DtConferencia",
      "name": "DtConferencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioConferencia",
      "label": "UsuarioConferencia",
      "name": "UsuarioConferencia",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DtMovimento",
      "label": "DtMovimento",
      "name": "DtMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}