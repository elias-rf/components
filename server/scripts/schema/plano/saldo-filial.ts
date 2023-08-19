import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SaldoFilial extends ModelBase {
  static tableName = "SaldoFilial";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtSaldo!: Date;
  CdFilial!: number;
  Valor!: number;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtSaldo",
      "CdFilial",
      "Valor",
      ];
  }
}

SaldoFilial.knex(connections.plano);

export type TSaldoFilial = ModelObject<SaldoFilial>;
