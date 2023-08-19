import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreMapaEcf extends ModelBase {
  static tableName = "MestreMapaECF";
  static idColumn = [];

  CdFilial!: number;
  DtMapa!: Date;
  NumMapa!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtMapa",
      "NumMapa",
      ];
  }
}

MestreMapaEcf.knex(connections.plano);

export type TMestreMapaEcf = ModelObject<MestreMapaEcf>;
