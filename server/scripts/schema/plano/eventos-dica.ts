import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EventosDica extends ModelBase {
  static tableName = "EventosDica";
  static idColumn = [];

  CdEmpresa!: number;
  CdUsuario!: string;
  CdFuncao!: string;
  Evento!: string;
  Data!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdUsuario",
      "CdFuncao",
      "Evento",
      "Data",
      ];
  }
}

EventosDica.knex(connections.plano);

export type TEventosDica = ModelObject<EventosDica>;
