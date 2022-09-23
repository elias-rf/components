import { TEntity } from "@er/types/*";

export const MestreRAT: TEntity =
  {
  "database": "plano",
  "table": "MestreRAT",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumeroRAT",
      "label": "NumeroRAT",
      "name": "NumeroRAT",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CTN",
      "label": "CTN",
      "name": "CTN",
      "type": "string",
      "size": 20
    },
    {
      "field": "DtPreventiva",
      "label": "DtPreventiva",
      "name": "DtPreventiva",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumeroOS",
      "label": "NumeroOS",
      "name": "NumeroOS",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 30
    },
    {
      "field": "CdEquipamento",
      "label": "CdEquipamento",
      "name": "CdEquipamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 20
    },
    {
      "field": "DtChamado",
      "label": "DtChamado",
      "name": "DtChamado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrChamado",
      "label": "HrChamado",
      "name": "HrChamado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtResposta",
      "label": "DtResposta",
      "name": "DtResposta",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrResposta",
      "label": "HrResposta",
      "name": "HrResposta",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtSolucao",
      "label": "DtSolucao",
      "name": "DtSolucao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrSolucao",
      "label": "HrSolucao",
      "name": "HrSolucao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Defeito",
      "label": "Defeito",
      "name": "Defeito",
      "type": "string",
      "size": 100
    },
    {
      "field": "CdAtividade",
      "label": "CdAtividade",
      "name": "CdAtividade",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdDefeito",
      "label": "CdDefeito",
      "name": "CdDefeito",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdCausa",
      "label": "CdCausa",
      "name": "CdCausa",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdSolucao",
      "label": "CdSolucao",
      "name": "CdSolucao",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgPrioridade",
      "label": "FgPrioridade",
      "name": "FgPrioridade",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFase",
      "label": "CdFase",
      "name": "CdFase",
      "type": "int",
      "size": 2
    },
    {
      "field": "NumIntervencoes",
      "label": "NumIntervencoes",
      "name": "NumIntervencoes",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtUltIntervencao",
      "label": "DtUltIntervencao",
      "name": "DtUltIntervencao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdAtendente",
      "label": "CdAtendente",
      "name": "CdAtendente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdRespAtendimento",
      "label": "CdRespAtendimento",
      "name": "CdRespAtendimento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtPrevRetorno",
      "label": "DtPrevRetorno",
      "name": "DtPrevRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgClassificacao",
      "label": "FgClassificacao",
      "name": "FgClassificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TempoPrevisto",
      "label": "TempoPrevisto",
      "name": "TempoPrevisto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumHrDeslocamento",
      "label": "NumHrDeslocamento",
      "name": "NumHrDeslocamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumHrFaturada",
      "label": "NumHrFaturada",
      "name": "NumHrFaturada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumHrAbonada",
      "label": "NumHrAbonada",
      "name": "NumHrAbonada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Funcao",
      "label": "Funcao",
      "name": "Funcao",
      "type": "string",
      "size": 128
    },
    {
      "field": "FgAtendimentoInterno",
      "label": "FgAtendimentoInterno",
      "name": "FgAtendimentoInterno",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraSolicitacao",
      "label": "FgGeraSolicitacao",
      "name": "FgGeraSolicitacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReleaseNotes",
      "label": "FgReleaseNotes",
      "name": "FgReleaseNotes",
      "type": "string",
      "size": 1
    },
    {
      "field": "Versao",
      "label": "Versao",
      "name": "Versao",
      "type": "string",
      "size": 16
    },
    {
      "field": "VlOrcamento",
      "label": "VlOrcamento",
      "name": "VlOrcamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFormaPagto",
      "label": "CdFormaPagto",
      "name": "CdFormaPagto",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgImprimeValoresRat",
      "label": "FgImprimeValoresRat",
      "name": "FgImprimeValoresRat",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControleDesenvolvimento",
      "label": "FgControleDesenvolvimento",
      "name": "FgControleDesenvolvimento",
      "type": "string",
      "size": 1
    },
    {
      "field": "Ambiente",
      "label": "Ambiente",
      "name": "Ambiente",
      "type": "string",
      "size": 1
    }
  ]
}