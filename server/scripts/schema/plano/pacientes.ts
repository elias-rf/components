import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Pacientes extends ModelBase {
  static tableName = "Pacientes";
  static idColumn = [];

  Domicilio!: string;
  NmPaciente!: string;
  

  static getFields() {
    return [
      "Domicilio",
      "NmPaciente",
      ];
  }
}

Pacientes.knex(connections.plano);

export type TPacientes = ModelObject<Pacientes>;
