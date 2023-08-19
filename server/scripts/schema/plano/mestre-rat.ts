import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreRat extends ModelBase {
  static tableName = "MestreRAT";
  static idColumn = [];

  CdFilial!: number;
  NumeroRAT!: number;
  CTN!: string;
  DtPreventiva!: Date;
  FgSituacao!: string;
  NumeroOS!: string;
  CdCliente!: number;
  NmContato!: string;
  CdEquipamento!: number;
  NumSerie!: string;
  DtChamado!: Date;
  HrChamado!: Date;
  DtResposta!: Date;
  HrResposta!: Date;
  DtSolucao!: Date;
  HrSolucao!: Date;
  Defeito!: string;
  CdAtividade!: number;
  CdDefeito!: number;
  CdCausa!: number;
  CdSolucao!: number;
  FgPrioridade!: string;
  CdFase!: number;
  NumIntervencoes!: number;
  DtUltIntervencao!: Date;
  CdAtendente!: number;
  CdRespAtendimento!: number;
  DtPrevRetorno!: Date;
  FgClassificacao!: string;
  TempoPrevisto!: number;
  NumHrDeslocamento!: number;
  NumHrFaturada!: number;
  NumHrAbonada!: number;
  Funcao!: string;
  FgAtendimentoInterno!: string;
  FgGeraSolicitacao!: string;
  FgReleaseNotes!: string;
  Versao!: string;
  VlOrcamento!: number;
  CdFormaPagto!: number;
  FgImprimeValoresRat!: string;
  FgControleDesenvolvimento!: string;
  Ambiente!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumeroRAT",
      "CTN",
      "DtPreventiva",
      "FgSituacao",
      "NumeroOS",
      "CdCliente",
      "NmContato",
      "CdEquipamento",
      "NumSerie",
      "DtChamado",
      "HrChamado",
      "DtResposta",
      "HrResposta",
      "DtSolucao",
      "HrSolucao",
      "Defeito",
      "CdAtividade",
      "CdDefeito",
      "CdCausa",
      "CdSolucao",
      "FgPrioridade",
      "CdFase",
      "NumIntervencoes",
      "DtUltIntervencao",
      "CdAtendente",
      "CdRespAtendimento",
      "DtPrevRetorno",
      "FgClassificacao",
      "TempoPrevisto",
      "NumHrDeslocamento",
      "NumHrFaturada",
      "NumHrAbonada",
      "Funcao",
      "FgAtendimentoInterno",
      "FgGeraSolicitacao",
      "FgReleaseNotes",
      "Versao",
      "VlOrcamento",
      "CdFormaPagto",
      "FgImprimeValoresRat",
      "FgControleDesenvolvimento",
      "Ambiente",
      ];
  }
}

MestreRat.knex(connections.plano);

export type TMestreRat = ModelObject<MestreRat>;
