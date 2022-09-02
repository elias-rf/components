import { TEntity } from "@er/types/*";

export const FilialSugestaoCadProduto: TEntity =
  {
  "database": "plano",
  "table": "FilialSugestaoCadProduto",
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
      "field": "TipoTributacaoICMS",
      "label": "TipoTributacaoICMS",
      "name": "TipoTributacaoICMS",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "PercReducaoICMSST",
      "label": "PercReducaoICMSST",
      "name": "PercReducaoICMSST",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgReducaoICMSContribuinte",
      "label": "FgReducaoICMSContribuinte",
      "name": "FgReducaoICMSContribuinte",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgReducaoICMSNaoContribuinte",
      "label": "FgReducaoICMSNaoContribuinte",
      "name": "FgReducaoICMSNaoContribuinte",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgCompoeDeducaoICMS",
      "label": "FgCompoeDeducaoICMS",
      "name": "FgCompoeDeducaoICMS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIsentoICMSECF",
      "label": "FgIsentoICMSECF",
      "name": "FgIsentoICMSECF",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIsentoSubstituido030",
      "label": "FgIsentoSubstituido030",
      "name": "FgIsentoSubstituido030",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ModDeterminacaoBCICMS",
      "label": "ModDeterminacaoBCICMS",
      "name": "ModDeterminacaoBCICMS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ModDeterminacaoBCICMSSub",
      "label": "ModDeterminacaoBCICMSSub",
      "name": "ModDeterminacaoBCICMSSub",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CSTIPIEntrada",
      "label": "CSTIPIEntrada",
      "name": "CSTIPIEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaIPIEntrada",
      "label": "AliquotaIPIEntrada",
      "name": "AliquotaIPIEntrada",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CSTIPISaida",
      "label": "CSTIPISaida",
      "name": "CSTIPISaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaIPISaida",
      "label": "AliquotaIPISaida",
      "name": "AliquotaIPISaida",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdEnquadramentoIPI",
      "label": "CdEnquadramentoIPI",
      "name": "CdEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "ClasseEnquadramentoIPI",
      "label": "ClasseEnquadramentoIPI",
      "name": "ClasseEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "CdSeloIPI",
      "label": "CdSeloIPI",
      "name": "CdSeloIPI",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CSTPISEntrada",
      "label": "CSTPISEntrada",
      "name": "CSTPISEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaPISEntrada",
      "label": "AliquotaPISEntrada",
      "name": "AliquotaPISEntrada",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CSTPISSaida",
      "label": "CSTPISSaida",
      "name": "CSTPISSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaPISSaida",
      "label": "AliquotaPISSaida",
      "name": "AliquotaPISSaida",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CSTCOFINSEntrada",
      "label": "CSTCOFINSEntrada",
      "name": "CSTCOFINSEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINSEntrada",
      "label": "AliquotaCOFINSEntrada",
      "name": "AliquotaCOFINSEntrada",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CSTCOFINSSaida",
      "label": "CSTCOFINSSaida",
      "name": "CSTCOFINSSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINSSaida",
      "label": "AliquotaCOFINSSaida",
      "name": "AliquotaCOFINSSaida",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgCompoeBaseISS",
      "label": "FgCompoeBaseISS",
      "name": "FgCompoeBaseISS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "AliquotaISS",
      "label": "AliquotaISS",
      "name": "AliquotaISS",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdServico",
      "label": "CdServico",
      "name": "CdServico",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "FgCompoeBlocoK",
      "label": "FgCompoeBlocoK",
      "name": "FgCompoeBlocoK",
      "type": "string",
      "size": 1
    }
  ]
}
