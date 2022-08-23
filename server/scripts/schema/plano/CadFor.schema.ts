import { TEntity } from "@er/types/*";

export const CadFor: TEntity =
  {
  "database": "plano",
  "table": "CadFor",
  "fields": [
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CadFor_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 70,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 70,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 40
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CGC",
      "label": "CGC",
      "name": "CGC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "string",
      "size": 16
    },
    {
      "field": "EMail",
      "label": "EMail",
      "name": "EMail",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdTipo",
      "label": "CdTipo",
      "name": "CdTipo",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdSubTipo",
      "label": "CdSubTipo",
      "name": "CdSubTipo",
      "type": "int",
      "size": 2
    },
    {
      "field": "ReduMargemSub",
      "label": "ReduMargemSub",
      "name": "ReduMargemSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtUltCompra",
      "label": "DtUltCompra",
      "name": "DtUltCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "ModeloAtualizacao",
      "label": "ModeloAtualizacao",
      "name": "ModeloAtualizacao",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdGrupo",
      "label": "CdGrupo",
      "name": "CdGrupo",
      "type": "int",
      "size": 4
    },
    {
      "field": "ModeloPedido",
      "label": "ModeloPedido",
      "name": "ModeloPedido",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdIdentificacao",
      "label": "CdIdentificacao",
      "name": "CdIdentificacao",
      "type": "string",
      "size": 15
    },
    {
      "field": "VlMoeda",
      "label": "VlMoeda",
      "name": "VlMoeda",
      "type": "float",
      "size": 8
    },
    {
      "field": "CdCentroCustoPadrao",
      "label": "CdCentroCustoPadrao",
      "name": "CdCentroCustoPadrao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "IdCondPagamento",
      "label": "IdCondPagamento",
      "name": "IdCondPagamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 2048
    },
    {
      "field": "DirTrocaArquivo",
      "label": "DirTrocaArquivo",
      "name": "DirTrocaArquivo",
      "type": "string",
      "size": 128
    },
    {
      "field": "NmFantasia",
      "label": "NmFantasia",
      "name": "NmFantasia",
      "type": "string",
      "size": 64
    },
    {
      "field": "Classificacao",
      "label": "Classificacao",
      "name": "Classificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCotacao",
      "label": "FgCotacao",
      "name": "FgCotacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSigiloso",
      "label": "FgSigiloso",
      "name": "FgSigiloso",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumContaDespesa",
      "label": "NumContaDespesa",
      "name": "NumContaDespesa",
      "type": "int",
      "size": 9
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGNRE",
      "label": "FgGNRE",
      "name": "FgGNRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "int",
      "size": 4
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 32
    },
    {
      "field": "InscSuframa",
      "label": "InscSuframa",
      "name": "InscSuframa",
      "type": "string",
      "size": 16
    },
    {
      "field": "FgTipoCustoDRE",
      "label": "FgTipoCustoDRE",
      "name": "FgTipoCustoDRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdPais",
      "label": "CdPais",
      "name": "CdPais",
      "type": "int",
      "size": 5
    }
  ]
}
