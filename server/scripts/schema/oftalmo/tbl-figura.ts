import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblFigura extends ModelBase {
  static tableName = "tbl_figura";
  static idColumn = ["KFigura"];

  KFigura!: number;
  Figura!: any;
  TipoFigura!: number;
  

  static getFields() {
    return [
      "KFigura",
      "Figura",
      "TipoFigura",
      ];
  }
}

TblFigura.knex(connections.oftalmo);

export type TTblFigura = ModelObject<TblFigura>;
