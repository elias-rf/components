import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpTipo extends ModelBase {
  static tableName = "tbl_OP_Tipo";
  static idColumn = ["kTipoOP"];

  kTipoOP!: number;
  TipoOP!: string;
  

  static getFields() {
    return [
      "kTipoOP",
      "TipoOP",
      ];
  }
}

TblOpTipo.knex(connections.oftalmo);

export type TTblOpTipo = ModelObject<TblOpTipo>;
