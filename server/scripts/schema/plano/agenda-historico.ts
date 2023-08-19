import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AgendaHistorico extends ModelBase {
  static tableName = "AgendaHistorico";
  static idColumn = [];

  IdCompromisso!: number;
  Ocorrencia!: number;
  CdResponsavel!: string;
  DtOcorrencia!: Date;
  Historico!: string;
  CdUsuario!: string;
  

  static getFields() {
    return [
      "IdCompromisso",
      "Ocorrencia",
      "CdResponsavel",
      "DtOcorrencia",
      "Historico",
      "CdUsuario",
      ];
  }
}

AgendaHistorico.knex(connections.plano);

export type TAgendaHistorico = ModelObject<AgendaHistorico>;
