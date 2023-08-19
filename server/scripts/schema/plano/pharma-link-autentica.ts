import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PharmaLinkAutentica extends ModelBase {
  static tableName = "PharmaLinkAutentica";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  Autentica!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "Autentica",
      ];
  }
}

PharmaLinkAutentica.knex(connections.plano);

export type TPharmaLinkAutentica = ModelObject<PharmaLinkAutentica>;
