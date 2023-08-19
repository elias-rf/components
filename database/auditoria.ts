import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TAuditoria extends ModelBase {
  static tableName = "tAuditoria";
  static idColumn = "id";

  id!: number;
  estacao!: string;
  data!: Date;
  hora!: Date;
  usuario!: string;
  operacao!: string;

  static getFields() {
    return ["id", "estacao", "data", "hora", "usuario", "operacao"];
  }
}

TAuditoria.knex(connections.oftalmo);

export type TTAuditoria = ModelObject<TAuditoria>;
