import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Ecfsgt extends ModelBase {
  static tableName = "ECFSGT";
  static idColumn = [];

  CdFilial!: number;
  ECF!: number;
  Identificacao!: string;
  VlGrandeTotal!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "ECF",
      "Identificacao",
      "VlGrandeTotal",
      "DtUltAlteracao",
      ];
  }
}

Ecfsgt.knex(connections.plano);

export type TEcfsgt = ModelObject<Ecfsgt>;
