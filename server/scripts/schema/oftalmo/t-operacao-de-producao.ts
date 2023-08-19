import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoDeProducao extends ModelBase {
  static tableName = "tOperacaoDeProducao";
  static idColumn = ["kOperacao"];

  kOperacao!: number;
  Operacao!: string;
  EhRetrabalho!: number;
  Especial!: number;
  Descricao!: string;
  Amostragem!: number;
  

  static getFields() {
    return [
      "kOperacao",
      "Operacao",
      "EhRetrabalho",
      "Especial",
      "Descricao",
      "Amostragem",
      ];
  }
}

TOperacaoDeProducao.knex(connections.oftalmo);

export type TTOperacaoDeProducao = ModelObject<TOperacaoDeProducao>;
