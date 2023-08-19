import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Agenda extends ModelBase {
  static tableName = "Agenda";
  static idColumn = ["IdCompromisso"];

  CdUsuario!: string;
  IdCompromisso!: number;
  CdCliente!: number;
  DtAgendamento!: Date;
  HrAgendamento!: Date;
  DtAgendada!: Date;
  HrAgendado!: Date;
  DsCompromisso!: string;
  NmContato!: string;
  FgStatusCompromisso!: string;
  NumPedido!: number;
  CdRespAgendamento!: string;
  

  static getFields() {
    return [
      "CdUsuario",
      "IdCompromisso",
      "CdCliente",
      "DtAgendamento",
      "HrAgendamento",
      "DtAgendada",
      "HrAgendado",
      "DsCompromisso",
      "NmContato",
      "FgStatusCompromisso",
      "NumPedido",
      "CdRespAgendamento",
      ];
  }
}

Agenda.knex(connections.plano);

export type TAgenda = ModelObject<Agenda>;
