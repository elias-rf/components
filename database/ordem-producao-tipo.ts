import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class OrdemProducaoTipo extends ModelBase {
  static tableName = "tTipoDeOP";
  static idColumn = "kTipoOp";

  static getFields() {
    return ["kTipoOP", "DescTipo"];
  }
}

OrdemProducaoTipo.knex(connections.oftalmo);

export type TOrdemProducaoTipo = ModelObject<OrdemProducaoTipo>;
