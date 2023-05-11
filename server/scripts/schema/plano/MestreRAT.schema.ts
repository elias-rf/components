import { TTableDef } from "@/types/model";

export const MestreRAT: TTableDef = {
  database: "plano",
  table: "MestreRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CTN",
      label: "CTN",
      name: "CTN",
      typeField: "string",
    },
    {
      field: "DtPreventiva",
      label: "DtPreventiva",
      name: "DtPreventiva",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "NumeroOS",
      label: "NumeroOS",
      name: "NumeroOS",
      typeField: "string",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
    },
    {
      field: "CdEquipamento",
      label: "CdEquipamento",
      name: "CdEquipamento",
      typeField: "int",
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
    },
    {
      field: "DtChamado",
      label: "DtChamado",
      name: "DtChamado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrChamado",
      label: "HrChamado",
      name: "HrChamado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtResposta",
      label: "DtResposta",
      name: "DtResposta",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrResposta",
      label: "HrResposta",
      name: "HrResposta",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtSolucao",
      label: "DtSolucao",
      name: "DtSolucao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrSolucao",
      label: "HrSolucao",
      name: "HrSolucao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Defeito",
      label: "Defeito",
      name: "Defeito",
      typeField: "string",
    },
    {
      field: "CdAtividade",
      label: "CdAtividade",
      name: "CdAtividade",
      typeField: "int",
    },
    {
      field: "CdDefeito",
      label: "CdDefeito",
      name: "CdDefeito",
      typeField: "int",
    },
    {
      field: "CdCausa",
      label: "CdCausa",
      name: "CdCausa",
      typeField: "int",
    },
    {
      field: "CdSolucao",
      label: "CdSolucao",
      name: "CdSolucao",
      typeField: "int",
    },
    {
      field: "FgPrioridade",
      label: "FgPrioridade",
      name: "FgPrioridade",
      typeField: "string",
    },
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",
    },
    {
      field: "NumIntervencoes",
      label: "NumIntervencoes",
      name: "NumIntervencoes",
      typeField: "int",
    },
    {
      field: "DtUltIntervencao",
      label: "DtUltIntervencao",
      name: "DtUltIntervencao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdAtendente",
      label: "CdAtendente",
      name: "CdAtendente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdRespAtendimento",
      label: "CdRespAtendimento",
      name: "CdRespAtendimento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtPrevRetorno",
      label: "DtPrevRetorno",
      name: "DtPrevRetorno",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgClassificacao",
      label: "FgClassificacao",
      name: "FgClassificacao",
      typeField: "string",
    },
    {
      field: "TempoPrevisto",
      label: "TempoPrevisto",
      name: "TempoPrevisto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumHrDeslocamento",
      label: "NumHrDeslocamento",
      name: "NumHrDeslocamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumHrFaturada",
      label: "NumHrFaturada",
      name: "NumHrFaturada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumHrAbonada",
      label: "NumHrAbonada",
      name: "NumHrAbonada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",
    },
    {
      field: "FgAtendimentoInterno",
      label: "FgAtendimentoInterno",
      name: "FgAtendimentoInterno",
      typeField: "string",
    },
    {
      field: "FgGeraSolicitacao",
      label: "FgGeraSolicitacao",
      name: "FgGeraSolicitacao",
      typeField: "string",
    },
    {
      field: "FgReleaseNotes",
      label: "FgReleaseNotes",
      name: "FgReleaseNotes",
      typeField: "string",
    },
    {
      field: "Versao",
      label: "Versao",
      name: "Versao",
      typeField: "string",
    },
    {
      field: "VlOrcamento",
      label: "VlOrcamento",
      name: "VlOrcamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFormaPagto",
      label: "CdFormaPagto",
      name: "CdFormaPagto",
      typeField: "int",
    },
    {
      field: "FgImprimeValoresRat",
      label: "FgImprimeValoresRat",
      name: "FgImprimeValoresRat",
      typeField: "string",
    },
    {
      field: "FgControleDesenvolvimento",
      label: "FgControleDesenvolvimento",
      name: "FgControleDesenvolvimento",
      typeField: "string",
    },
    {
      field: "Ambiente",
      label: "Ambiente",
      name: "Ambiente",
      typeField: "string",
    },
  ],
};
