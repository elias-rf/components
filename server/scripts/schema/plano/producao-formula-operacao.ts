import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormulaOperacao extends ModelBase {
  static tableName = "ProducaoFormulaOperacao";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  CdOperacao!: number;
  QtdeConforme!: number;
  QtdeRetrabalho!: number;
  CdMaquina!: string;
  CdOperador!: number;
  DtInicio!: Date;
  DtTermino!: Date;
  CdOperacaoRetrabalho!: number;
  QtdeNaoConforme!: number;
  Sequencia!: number;
  QtdeReclassificacao!: number;
  SequenciaOperacao!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "CdOperacao",
      "QtdeConforme",
      "QtdeRetrabalho",
      "CdMaquina",
      "CdOperador",
      "DtInicio",
      "DtTermino",
      "CdOperacaoRetrabalho",
      "QtdeNaoConforme",
      "Sequencia",
      "QtdeReclassificacao",
      "SequenciaOperacao",
      ];
  }
}

ProducaoFormulaOperacao.knex(connections.plano);

export type TProducaoFormulaOperacao = ModelObject<ProducaoFormulaOperacao>;
