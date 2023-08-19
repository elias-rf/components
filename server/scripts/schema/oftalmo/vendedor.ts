import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Vendedor extends ModelBase {
  static tableName = "vendedor";
  static idColumn = [];

  id!: number;
  uf!: string;
  meta!: number;
  

  static getFields() {
    return [
      "id",
      "uf",
      "meta",
      ];
  }
}

Vendedor.knex(connections.oftalmo);

export type TVendedor = ModelObject<Vendedor>;
