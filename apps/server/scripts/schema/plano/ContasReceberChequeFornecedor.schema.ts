import { TEntity } from "@er/types/*";

export const ContasReceberChequeFornecedor: TEntity =
  {
  "database": "plano",
  "table": "ContasReceberChequeFornecedor",
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
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "SiglaDocumento",
      "label": "SiglaDocumento",
      "name": "SiglaDocumento",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDocumento",
      "label": "ItemDocumento",
      "name": "ItemDocumento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdEmpresaContasPagar",
      "label": "CdEmpresaContasPagar",
      "name": "CdEmpresaContasPagar",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilialContasPagar",
      "label": "CdFilialContasPagar",
      "name": "CdFilialContasPagar",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFornecedorContasPagar",
      "label": "CdFornecedorContasPagar",
      "name": "CdFornecedorContasPagar",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumDocumentoContasPagar",
      "label": "NumDocumentoContasPagar",
      "name": "NumDocumentoContasPagar",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SerieContasPagar",
      "label": "SerieContasPagar",
      "name": "SerieContasPagar",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloContasPagar",
      "label": "ModeloContasPagar",
      "name": "ModeloContasPagar",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDocumentoContasPagar",
      "label": "ItemDocumentoContasPagar",
      "name": "ItemDocumentoContasPagar",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtInclusao",
      "label": "DtInclusao",
      "name": "DtInclusao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}