import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Setores extends ModelBase {
  static tableName = "Setores";
  static idColumn = ["CdSetor"];

  CdSetor!: number;
  NmSetor!: string;
  ModeloPedido!: string;
  

  static getFields() {
    return [
      "CdSetor",
      "NmSetor",
      "ModeloPedido",
      ];
  }
}

Setores.knex(connections.plano);

export type TSetores = ModelObject<Setores>;
