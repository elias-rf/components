import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsMapaEcf extends ModelBase {
  static tableName = "ObsMapaECF";
  static idColumn = [];

  CdFilial!: number;
  DtMapa!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "DtMapa",
      "Observacao",
      ];
  }
}

ObsMapaEcf.knex(connections.plano);

export type TObsMapaEcf = ModelObject<ObsMapaEcf>;
