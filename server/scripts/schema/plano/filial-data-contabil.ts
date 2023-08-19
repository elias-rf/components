import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialDataContabil extends ModelBase {
  static tableName = "FilialDataContabil";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  DtFechamentoPeriodo!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "DtFechamentoPeriodo",
      "DtUltAlteracao",
      ];
  }
}

FilialDataContabil.knex(connections.plano);

export type TFilialDataContabil = ModelObject<FilialDataContabil>;
