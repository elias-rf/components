import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Eventos extends ModelBase {
  static tableName = "Eventos";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Data!: Date;
  Horario!: Date;
  CdUsuario!: string;
  CdFuncao!: string;
  Evento!: string;
  Estacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Data",
      "Horario",
      "CdUsuario",
      "CdFuncao",
      "Evento",
      "Estacao",
      ];
  }
}

Eventos.knex(connections.plano);

export type TEventos = ModelObject<Eventos>;
