import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoConversao extends ModelBase {
  static tableName = "HistoricoConversao";
  static idColumn = [];

  DtRelease!: Date;
  DtAtualizacao!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "DtRelease",
      "DtAtualizacao",
      "Usuario",
      ];
  }
}

HistoricoConversao.knex(connections.plano);

export type THistoricoConversao = ModelObject<HistoricoConversao>;
