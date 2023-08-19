import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Ecfs extends ModelBase {
  static tableName = "ECFS";
  static idColumn = [];

  CdFilial!: number;
  ECF!: number;
  Identificacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "ECF",
      "Identificacao",
      "DtUltAlteracao",
      ];
  }
}

Ecfs.knex(connections.plano);

export type TEcfs = ModelObject<Ecfs>;
