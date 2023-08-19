import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Cores extends ModelBase {
  static tableName = "Cores";
  static idColumn = ["CdCor"];

  CdCor!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdCor",
      "Descricao",
      ];
  }
}

Cores.knex(connections.plano);

export type TCores = ModelObject<Cores>;
