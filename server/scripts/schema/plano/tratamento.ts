import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Tratamento extends ModelBase {
  static tableName = "Tratamento";
  static idColumn = [];

  Comprimento!: number;
  NumCliche!: number;
  FormulaTratamento!: string;
  

  static getFields() {
    return [
      "Comprimento",
      "NumCliche",
      "FormulaTratamento",
      ];
  }
}

Tratamento.knex(connections.plano);

export type TTratamento = ModelObject<Tratamento>;
