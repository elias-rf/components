import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaComprovante extends ModelBase {
  static tableName = "ePharmaComprovante";
  static idColumn = [];

  CdFilial!: number;
  NumCupom!: number;
  Sequencia!: number;
  Texto!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCupom",
      "Sequencia",
      "Texto",
      ];
  }
}

EPharmaComprovante.knex(connections.plano);

export type TEPharmaComprovante = ModelObject<EPharmaComprovante>;
