import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoSecretariasObs extends ModelBase {
  static tableName = "MedicoSecretariasObs";
  static idColumn = [];

  CRM!: string;
  NmSecretaria!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CRM",
      "NmSecretaria",
      "DtUltAlteracao",
      "Observacao",
      ];
  }
}

MedicoSecretariasObs.knex(connections.plano);

export type TMedicoSecretariasObs = ModelObject<MedicoSecretariasObs>;
