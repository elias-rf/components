import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesAjuste extends ModelBase {
  static tableName = "LotesAjuste";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  NumLote!: string;
  DtBase!: Date;
  SaldoAnterior!: number;
  SaldoNovo!: number;
  FgAlteraSaldo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "NumLote",
      "DtBase",
      "SaldoAnterior",
      "SaldoNovo",
      "FgAlteraSaldo",
      ];
  }
}

LotesAjuste.knex(connections.plano);

export type TLotesAjuste = ModelObject<LotesAjuste>;
