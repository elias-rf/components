import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AgendaClientes extends ModelBase {
  static tableName = "AgendaClientes";
  static idColumn = ["IdCompromisso"];

  IdCompromisso!: number;
  NmCliente!: string;
  Telefone!: string;
  

  static getFields() {
    return [
      "IdCompromisso",
      "NmCliente",
      "Telefone",
      ];
  }
}

AgendaClientes.knex(connections.plano);

export type TAgendaClientes = ModelObject<AgendaClientes>;
