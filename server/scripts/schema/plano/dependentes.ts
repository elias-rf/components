import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Dependentes extends ModelBase {
  static tableName = "Dependentes";
  static idColumn = [];

  CdCliente!: number;
  CdFuncionario!: number;
  Sequencia!: number;
  NmDependente!: string;
  DtNctoDependente!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "CdFuncionario",
      "Sequencia",
      "NmDependente",
      "DtNctoDependente",
      ];
  }
}

Dependentes.knex(connections.plano);

export type TDependentes = ModelObject<Dependentes>;
