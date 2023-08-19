import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProDcb extends ModelBase {
  static tableName = "CadProDCB";
  static idColumn = [];

  CdProduto!: string;
  CDDCB!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "CDDCB",
      "DtUltAlteracao",
      ];
  }
}

CadProDcb.knex(connections.plano);

export type TCadProDcb = ModelObject<CadProDcb>;
