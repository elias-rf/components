import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLioProcesso extends ModelBase {
  static tableName = "tbl_OP_LIO_Processo";
  static idColumn = [];

  fkOPLio!: number;
  fkOperacao!: number;
  Quantidade!: number;
  

  static getFields() {
    return [
      "fkOPLio",
      "fkOperacao",
      "Quantidade",
      ];
  }
}

TblOpLioProcesso.knex(connections.oftalmo);

export type TTblOpLioProcesso = ModelObject<TblOpLioProcesso>;
