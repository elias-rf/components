import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TTipoDeOp extends ModelBase {
  static tableName = "tTipoDeOP";
  static idColumn = ["kTipoOP"];

  kTipoOP!: number;
  DescTipo!: string;
  

  static getFields() {
    return [
      "kTipoOP",
      "DescTipo",
      ];
  }
}

TTipoDeOp.knex(connections.oftalmo);

export type TTTipoDeOp = ModelObject<TTipoDeOp>;
