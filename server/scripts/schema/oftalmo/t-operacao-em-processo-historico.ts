import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoEmProcessoHistorico extends ModelBase {
  static tableName = "tOperacaoEmProcessoHistorico";
  static idColumn = ["kOperacaoEPH"];

  kOperacaoEPH!: number;
  DataRegistro!: Date;
  fkLinhaDeProducao!: number;
  fkOperacao!: number;
  Quantidade!: number;
  

  static getFields() {
    return [
      "kOperacaoEPH",
      "DataRegistro",
      "fkLinhaDeProducao",
      "fkOperacao",
      "Quantidade",
      ];
  }
}

TOperacaoEmProcessoHistorico.knex(connections.oftalmo);

export type TTOperacaoEmProcessoHistorico = ModelObject<TOperacaoEmProcessoHistorico>;
