import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClassesEribeiro extends ModelBase {
  static tableName = "ClassesERIBEIRO";
  static idColumn = ["NumConta"];

  NumConta!: number;
  Tipo!: string;
  Valor!: number;
  

  static getFields() {
    return [
      "NumConta",
      "Tipo",
      "Valor",
      ];
  }
}

ClassesEribeiro.knex(connections.plano);

export type TClassesEribeiro = ModelObject<ClassesEribeiro>;
