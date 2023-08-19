import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Causas extends ModelBase {
  static tableName = "Causas";
  static idColumn = ["CdCausa"];

  CdCausa!: number;
  NmCausa!: string;
  

  static getFields() {
    return [
      "CdCausa",
      "NmCausa",
      ];
  }
}

Causas.knex(connections.plano);

export type TCausas = ModelObject<Causas>;
