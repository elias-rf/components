import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Lixo extends ModelBase {
  static tableName = "lixo";
  static idColumn = ["lote"];

  lote!: string;
  

  static getFields() {
    return [
      "lote",
      ];
  }
}

Lixo.knex(connections.plano);

export type TLixo = ModelObject<Lixo>;
