import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class OperacaoProducao extends ModelBase {
  static tableName = "tOperacaoDeProducao";
  static idColumn = "kOperacao";
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

OperacaoProducao.knex(connections.oftalmo);

export type TOperacaoProducao = ModelObject<OperacaoProducao>;
