import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AgendaCancelamento extends ModelBase {
  static tableName = "AgendaCancelamento";
  static idColumn = ["IdCompromisso"];

  CdUsuario!: string;
  IdCompromisso!: number;
  CdResponsavel!: string;
  DtCancelamento!: Date;
  HrCancelamento!: Date;
  DsMotivoCancelamento!: string;
  

  static getFields() {
    return [
      "CdUsuario",
      "IdCompromisso",
      "CdResponsavel",
      "DtCancelamento",
      "HrCancelamento",
      "DsMotivoCancelamento",
      ];
  }
}

AgendaCancelamento.knex(connections.plano);

export type TAgendaCancelamento = ModelObject<AgendaCancelamento>;
