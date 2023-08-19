import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SaldosFinan extends ModelBase {
  static tableName = "SaldosFinan";
  static idColumn = [];

  CdFilial!: number;
  DtReferencia!: Date;
  VlSaldo!: number;
  VlSaldoAnt!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtReferencia",
      "VlSaldo",
      "VlSaldoAnt",
      ];
  }
}

SaldosFinan.knex(connections.plano);

export type TSaldosFinan = ModelObject<SaldosFinan>;
