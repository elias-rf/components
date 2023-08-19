import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TextoPreventiva extends ModelBase {
  static tableName = "TextoPreventiva";
  static idColumn = ["Sequencia"];

  Sequencia!: number;
  Texto!: string;
  

  static getFields() {
    return [
      "Sequencia",
      "Texto",
      ];
  }
}

TextoPreventiva.knex(connections.plano);

export type TTextoPreventiva = ModelObject<TextoPreventiva>;
