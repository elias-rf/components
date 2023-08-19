import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BancoContaCorrenteBoletoFilial extends ModelBase {
  static tableName = "BancoContaCorrenteBoletoFilial";
  static idColumn = [];

  NumBanco!: number;
  NumAgencia!: number;
  NumContaCorrente!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "NumBanco",
      "NumAgencia",
      "NumContaCorrente",
      "CdFilial",
      ];
  }
}

BancoContaCorrenteBoletoFilial.knex(connections.plano);

export type TBancoContaCorrenteBoletoFilial = ModelObject<BancoContaCorrenteBoletoFilial>;
