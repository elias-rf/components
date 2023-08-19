import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidalinkComprovante extends ModelBase {
  static tableName = "VidalinkComprovante";
  static idColumn = [];

  CdFilial!: number;
  NumCupom!: number;
  Sequencia!: number;
  Texto!: string;
  NumAutorizacao!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCupom",
      "Sequencia",
      "Texto",
      "NumAutorizacao",
      ];
  }
}

VidalinkComprovante.knex(connections.plano);

export type TVidalinkComprovante = ModelObject<VidalinkComprovante>;
