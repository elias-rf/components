import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TLinhaDeProducao extends ModelBase {
  static tableName = "tLinhaDeProducao";
  static idColumn = ["kLinhaDeProducao"];

  kLinhaDeProducao!: number;
  LinhaDeProducao!: string;
  CalcularEmProcesso!: number;
  SolicitarLoteBotao!: number;
  fkOperacaoQtdEstExt!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "kLinhaDeProducao",
      "LinhaDeProducao",
      "CalcularEmProcesso",
      "SolicitarLoteBotao",
      "fkOperacaoQtdEstExt",
      "Descricao",
      ];
  }
}

TLinhaDeProducao.knex(connections.oftalmo);

export type TTLinhaDeProducao = ModelObject<TLinhaDeProducao>;
