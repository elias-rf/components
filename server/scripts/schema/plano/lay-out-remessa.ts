import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LayOutRemessa extends ModelBase {
  static tableName = "LayOutRemessa";
  static idColumn = ["IdLayOut"];

  IdLayOut!: string;
  

  static getFields() {
    return [
      "IdLayOut",
      ];
  }
}

LayOutRemessa.knex(connections.plano);

export type TLayOutRemessa = ModelObject<LayOutRemessa>;
