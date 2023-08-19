import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoEmProcesso extends ModelBase {
  static tableName = "tOperacaoEmProcesso";
  static idColumn = ["kOperacaoEP"];

  kOperacaoEP!: number;
  fkOP!: number;
  fkOperacao!: number;
  Quantidade!: number;
  

  static getFields() {
    return [
      "kOperacaoEP",
      "fkOP",
      "fkOperacao",
      "Quantidade",
      ];
  }
}

TOperacaoEmProcesso.knex(connections.oftalmo);

export type TTOperacaoEmProcesso = ModelObject<TOperacaoEmProcesso>;
