import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TefRetorno extends ModelBase {
  static tableName = "TEFRetorno";
  static idColumn = [];

  CdFilial!: number;
  NumCupom!: number;
  Sequencia!: number;
  TipoCampo!: number;
  Texto!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCupom",
      "Sequencia",
      "TipoCampo",
      "Texto",
      ];
  }
}

TefRetorno.knex(connections.plano);

export type TTefRetorno = ModelObject<TefRetorno>;
