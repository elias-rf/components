import { TEntity } from "@er/types/*";

export const BancoContaCorrente: TEntity =
  {
  "database": "plano",
  "table": "BancoContaCorrente",
  "fields": [
    {
      "field": "NumBanco",
      "label": "NumBanco",
      "name": "NumBanco",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumAgencia",
      "label": "NumAgencia",
      "name": "NumAgencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaCorrente",
      "label": "NumContaCorrente",
      "name": "NumContaCorrente",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NmTitular",
      "label": "NmTitular",
      "name": "NmTitular",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "SubConta",
      "label": "SubConta",
      "name": "SubConta",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DVConta",
      "label": "DVConta",
      "name": "DVConta",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DVAgenciaConta",
      "label": "DVAgenciaConta",
      "name": "DVAgenciaConta",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumConvenio",
      "label": "NumConvenio",
      "name": "NumConvenio",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumContratoCaucao",
      "label": "NumContratoCaucao",
      "name": "NumContratoCaucao",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "SiglaEmpresa",
      "label": "SiglaEmpresa",
      "name": "SiglaEmpresa",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "IdEmpresa",
      "label": "IdEmpresa",
      "name": "IdEmpresa",
      "type": "string",
      "size": 32
    },
    {
      "field": "NumCarteira",
      "label": "NumCarteira",
      "name": "NumCarteira",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdFilialAssociada",
      "label": "CdFilialAssociada",
      "name": "CdFilialAssociada",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtUltFechamento",
      "label": "DtUltFechamento",
      "name": "DtUltFechamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "ComplementoConta",
      "label": "ComplementoConta",
      "name": "ComplementoConta",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgCaixa",
      "label": "FgCaixa",
      "name": "FgCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumRemessa",
      "label": "NumRemessa",
      "name": "NumRemessa",
      "type": "int",
      "size": 5
    },
    {
      "field": "DVContratoCaucao",
      "label": "DVContratoCaucao",
      "name": "DVContratoCaucao",
      "type": "string",
      "size": 1
    },
    {
      "field": "BorderoCobranca",
      "label": "BorderoCobranca",
      "name": "BorderoCobranca",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgHomologacao",
      "label": "FgHomologacao",
      "name": "FgHomologacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumVariacaoCarteira",
      "label": "NumVariacaoCarteira",
      "name": "NumVariacaoCarteira",
      "type": "int",
      "size": 5
    }
  ]
}
