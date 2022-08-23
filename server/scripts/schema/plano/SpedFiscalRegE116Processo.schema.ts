import { TEntity } from "@er/types/*";

export const SpedFiscalRegE116Processo: TEntity =
  {
  "database": "plano",
  "table": "SpedFiscalRegE116Processo",
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
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdObrigacaoRecolher",
      "label": "CdObrigacaoRecolher",
      "name": "CdObrigacaoRecolher",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdReceita",
      "label": "CdReceita",
      "name": "CdReceita",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdIndicadorOrigem",
      "label": "CdIndicadorOrigem",
      "name": "CdIndicadorOrigem",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumProcesso",
      "label": "NumProcesso",
      "name": "NumProcesso",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DescricaoProcesso",
      "label": "DescricaoProcesso",
      "name": "DescricaoProcesso",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "DescricaoComplementarProcesso",
      "label": "DescricaoComplementarProcesso",
      "name": "DescricaoComplementarProcesso",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
