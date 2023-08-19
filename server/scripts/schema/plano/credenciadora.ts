import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Credenciadora extends ModelBase {
  static tableName = "Credenciadora";
  static idColumn = ["CNPJ"];

  CNPJ!: number;
  Codigo!: number;
  Empresa!: string;
  

  static getFields() {
    return [
      "CNPJ",
      "Codigo",
      "Empresa",
      ];
  }
}

Credenciadora.knex(connections.plano);

export type TCredenciadora = ModelObject<Credenciadora>;
