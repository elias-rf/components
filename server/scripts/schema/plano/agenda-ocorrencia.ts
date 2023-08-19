import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AgendaOcorrencia extends ModelBase {
  static tableName = "AgendaOcorrencia";
  static idColumn = [];

  CdUsuario!: string;
  IdCompromisso!: number;
  DtOcorrencia!: Date;
  HrOcorrencia!: Date;
  DsOcorrencia!: string;
  

  static getFields() {
    return [
      "CdUsuario",
      "IdCompromisso",
      "DtOcorrencia",
      "HrOcorrencia",
      "DsOcorrencia",
      ];
  }
}

AgendaOcorrencia.knex(connections.plano);

export type TAgendaOcorrencia = ModelObject<AgendaOcorrencia>;
