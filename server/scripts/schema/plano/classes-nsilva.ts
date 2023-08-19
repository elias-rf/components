import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClassesNsilva extends ModelBase {
  static tableName = "ClassesNSILVA";
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

ClassesNsilva.knex(connections.plano);

export type TClassesNsilva = ModelObject<ClassesNsilva>;
