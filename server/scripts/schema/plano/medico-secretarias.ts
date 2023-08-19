import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoSecretarias extends ModelBase {
  static tableName = "MedicoSecretarias";
  static idColumn = [];

  CRM!: string;
  NmSecretaria!: string;
  DtNascimento!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CRM",
      "NmSecretaria",
      "DtNascimento",
      "DtUltAlteracao",
      ];
  }
}

MedicoSecretarias.knex(connections.plano);

export type TMedicoSecretarias = ModelObject<MedicoSecretarias>;
