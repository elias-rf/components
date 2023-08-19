import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLiopuProcesso extends ModelBase {
  static tableName = "tbl_op_liopu_processo";
  static idColumn = [];

  fkoplio!: number;
  fkoperacao!: number;
  Quantidade!: number;
  

  static getFields() {
    return [
      "fkoplio",
      "fkoperacao",
      "Quantidade",
      ];
  }
}

TblOpLiopuProcesso.knex(connections.oftalmo);

export type TTblOpLiopuProcesso = ModelObject<TblOpLiopuProcesso>;
