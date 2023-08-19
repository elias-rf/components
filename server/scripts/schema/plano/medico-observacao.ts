import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoObservacao extends ModelBase {
  static tableName = "MedicoObservacao";
  static idColumn = ["CRM"];

  CRM!: string;
  Observacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CRM",
      "Observacao",
      "DtUltAlteracao",
      ];
  }
}

MedicoObservacao.knex(connections.plano);

export type TMedicoObservacao = ModelObject<MedicoObservacao>;
