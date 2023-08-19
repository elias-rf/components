import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabChe extends ModelBase {
  static tableName = "TabChe";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumCheque!: number;
  CdFavorecido!: number;
  NmFavorecido!: string;
  DtEmissao!: Date;
  VlCheque!: number;
  DtPgto!: Date;
  TxFinalidade!: string;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumCheque",
      "CdFavorecido",
      "NmFavorecido",
      "DtEmissao",
      "VlCheque",
      "DtPgto",
      "TxFinalidade",
      "FgSituacao",
      ];
  }
}

TabChe.knex(connections.plano);

export type TTabChe = ModelObject<TabChe>;
