import { TEntity } from "@er/types/*";

export const tbl_Produto: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Produto",
  "fields": [
    {
      "field": "kProduto",
      "label": "kProduto",
      "name": "tbl_Produto_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkCategoria",
      "label": "fkCategoria",
      "name": "fkCategoria",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "NomeComercial",
      "label": "NomeComercial",
      "name": "NomeComercial",
      "type": "string",
      "size": 120,
      "allowNull": false
    },
    {
      "field": "NomeInternacional",
      "label": "NomeInternacional",
      "name": "NomeInternacional",
      "type": "string",
      "size": 50
    },
    {
      "field": "BarCode",
      "label": "BarCode",
      "name": "BarCode",
      "type": "int",
      "size": 4
    },
    {
      "field": "Fabricante",
      "label": "Fabricante",
      "name": "Fabricante",
      "type": "string",
      "size": 50
    },
    {
      "field": "OBS",
      "label": "OBS",
      "name": "OBS",
      "type": "string",
      "size": 16
    },
    {
      "field": "DescricaoTecnica",
      "label": "DescricaoTecnica",
      "name": "DescricaoTecnica",
      "type": "string",
      "size": 16
    },
    {
      "field": "DescricaoGenerica",
      "label": "DescricaoGenerica",
      "name": "DescricaoGenerica",
      "type": "string",
      "size": 16
    },
    {
      "field": "CST",
      "label": "CST",
      "name": "CST",
      "type": "int",
      "size": 1
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 5
    },
    {
      "field": "GrupoCredito",
      "label": "GrupoCredito",
      "name": "GrupoCredito",
      "type": "string",
      "size": 20,
      "allowNull": false,
      "defaultValue": "Geral"
    },
    {
      "field": "PesoBruto",
      "label": "PesoBruto",
      "name": "PesoBruto",
      "type": "float",
      "size": 4,
      "allowNull": false,
      "defaultValue": "100"
    },
    {
      "field": "VlrMin",
      "label": "VlrMin",
      "name": "VlrMin",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Moeda",
      "label": "Moeda",
      "name": "Moeda",
      "type": "int",
      "size": 1
    },
    {
      "field": "NBM",
      "label": "NBM",
      "name": "NBM",
      "type": "string",
      "size": 30
    },
    {
      "field": "FOB",
      "label": "FOB",
      "name": "FOB",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Qtd",
      "label": "Qtd",
      "name": "Qtd",
      "type": "float",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Diametro",
      "label": "Diametro",
      "name": "Diametro",
      "type": "string",
      "size": 10
    },
    {
      "field": "DiametroTotal",
      "label": "DiametroTotal",
      "name": "DiametroTotal",
      "type": "string",
      "size": 10
    },
    {
      "field": "Furo",
      "label": "Furo",
      "name": "Furo",
      "type": "int",
      "size": 4
    },
    {
      "field": "Separacao",
      "label": "Separacao",
      "name": "Separacao",
      "type": "float",
      "size": 8
    },
    {
      "field": "PrazoAquisicao",
      "label": "PrazoAquisicao",
      "name": "PrazoAquisicao",
      "type": "int",
      "size": 4,
      "defaultValue": "30"
    },
    {
      "field": "fkNCM",
      "label": "fkNCM",
      "name": "fkNCM",
      "type": "int",
      "size": 2
    },
    {
      "field": "fkUnidade",
      "label": "fkUnidade",
      "name": "fkUnidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "ForaDeLinha",
      "label": "ForaDeLinha",
      "name": "ForaDeLinha",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Auditoria",
      "label": "Auditoria",
      "name": "Auditoria",
      "type": "int",
      "size": 1
    },
    {
      "field": "ItemEstoque",
      "label": "ItemEstoque",
      "name": "ItemEstoque",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkLinhaDeProducao",
      "label": "fkLinhaDeProducao",
      "name": "fkLinhaDeProducao",
      "type": "int",
      "size": 4
    },
    {
      "field": "EsterilizacaoETO",
      "label": "EsterilizacaoETO",
      "name": "EsterilizacaoETO",
      "type": "int",
      "size": 1
    },
    {
      "field": "IsCatalogo",
      "label": "IsCatalogo",
      "name": "IsCatalogo",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "ValorCusto",
      "label": "ValorCusto",
      "name": "ValorCusto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "defaultValue": "0"
    },
    {
      "field": "TaxaIPI",
      "label": "TaxaIPI",
      "name": "TaxaIPI",
      "type": "float",
      "size": 4
    },
    {
      "field": "PRO_Ferrara",
      "label": "PRO_Ferrara",
      "name": "PRO_Ferrara",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkSubCategoria",
      "label": "fkSubCategoria",
      "name": "fkSubCategoria",
      "type": "int",
      "size": 4
    },
    {
      "field": "CategoriaPREVISA",
      "label": "CategoriaPREVISA",
      "name": "CategoriaPREVISA",
      "type": "string",
      "size": 50
    },
    {
      "field": "OrigemCST",
      "label": "OrigemCST",
      "name": "OrigemCST",
      "type": "int",
      "size": 1
    }
  ]
}
