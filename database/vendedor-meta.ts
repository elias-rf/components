import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class VendedorMeta extends ModelBase {
  static tableName = "vendedor";
  static idColumn = "id";
  static getFields() {
    return ["id", "uf", "meta"];
  }
}

VendedorMeta.knex(connections.oftalmo);

export type TVendedorMeta = ModelObject<VendedorMeta>;
