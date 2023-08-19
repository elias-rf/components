import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoLinhaDeProducao extends ModelBase {
  static tableName = "tOperacaoLinhaDeProducao";
  static idColumn = ["kOperacaoLP"];

  kOperacaoLP!: number;
  fkLinhaDeProducao!: number;
  fkOperacao!: number;
  Condicional!: number;
  NextOLP!: number;
  NextOLPRet!: number;
  Ordem!: number;
  MarcoA!: number;
  CheckOrdem!: string;
  CheckOrdemRet!: number;
  CheckOrdemIsNotNeedClosed!: number;
  CheckQtd!: number;
  CheckQtdRet!: number;
  CheckAmostragem!: number;
  

  static getFields() {
    return [
      "kOperacaoLP",
      "fkLinhaDeProducao",
      "fkOperacao",
      "Condicional",
      "NextOLP",
      "NextOLPRet",
      "Ordem",
      "MarcoA",
      "CheckOrdem",
      "CheckOrdemRet",
      "CheckOrdemIsNotNeedClosed",
      "CheckQtd",
      "CheckQtdRet",
      "CheckAmostragem",
      ];
  }
}

TOperacaoLinhaDeProducao.knex(connections.oftalmo);

export type TTOperacaoLinhaDeProducao = ModelObject<TOperacaoLinhaDeProducao>;
