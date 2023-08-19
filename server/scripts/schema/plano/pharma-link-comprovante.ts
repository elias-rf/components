import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PharmaLinkComprovante extends ModelBase {
  static tableName = "PharmaLinkComprovante";
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

PharmaLinkComprovante.knex(connections.plano);

export type TPharmaLinkComprovante = ModelObject<PharmaLinkComprovante>;
