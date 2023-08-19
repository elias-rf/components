import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabSal extends ModelBase {
  static tableName = "TabSal";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtSaldo!: Date;
  VlSaldo!: number;
  FgSaldoFixado!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtSaldo",
      "VlSaldo",
      "FgSaldoFixado",
      ];
  }
}

TabSal.knex(connections.plano);

export type TTabSal = ModelObject<TabSal>;
