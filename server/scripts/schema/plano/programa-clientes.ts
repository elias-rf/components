import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProgramaClientes extends ModelBase {
  static tableName = "ProgramaClientes";
  static idColumn = [];

  CdPrograma!: number;
  CdCliente!: number;
  NumMatricula!: string;
  

  static getFields() {
    return [
      "CdPrograma",
      "CdCliente",
      "NumMatricula",
      ];
  }
}

ProgramaClientes.knex(connections.plano);

export type TProgramaClientes = ModelObject<ProgramaClientes>;
