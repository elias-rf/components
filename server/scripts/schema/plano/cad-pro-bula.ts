import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProBula extends ModelBase {
  static tableName = "CadProBula";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  DtUltAlteracao!: Date;
  Texto!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "DtUltAlteracao",
      "Texto",
      ];
  }
}

CadProBula.knex(connections.plano);

export type TCadProBula = ModelObject<CadProBula>;
