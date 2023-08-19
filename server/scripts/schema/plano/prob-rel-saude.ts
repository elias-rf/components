import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProbRelSaude extends ModelBase {
  static tableName = "ProbRelSaude";
  static idColumn = [];

  CdPrs!: string;
  Descricao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdPrs",
      "Descricao",
      "DtUltAlteracao",
      ];
  }
}

ProbRelSaude.knex(connections.plano);

export type TProbRelSaude = ModelObject<ProbRelSaude>;
