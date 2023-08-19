import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabLan extends ModelBase {
  static tableName = "TabLan";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumLcto!: number;
  DtBase!: Date;
  TipAplic!: string;
  VlAplicado!: number;
  LctoDiv!: number;
  VlResgate!: number;
  LctoResg!: number;
  LctoRend!: number;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumLcto",
      "DtBase",
      "TipAplic",
      "VlAplicado",
      "LctoDiv",
      "VlResgate",
      "LctoResg",
      "LctoRend",
      ];
  }
}

TabLan.knex(connections.plano);

export type TTabLan = ModelObject<TabLan>;
