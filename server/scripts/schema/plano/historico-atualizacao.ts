import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoAtualizacao extends ModelBase {
  static tableName = "HistoricoAtualizacao";
  static idColumn = ["Funcao"];

  Funcao!: string;
  Data!: Date;
  

  static getFields() {
    return [
      "Funcao",
      "Data",
      ];
  }
}

HistoricoAtualizacao.knex(connections.plano);

export type THistoricoAtualizacao = ModelObject<HistoricoAtualizacao>;
