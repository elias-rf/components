import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FaturamentoRat extends ModelBase {
  static tableName = "FaturamentoRat";
  static idColumn = ["NumeroRAT"];

  NumeroRAT!: number;
  NumParcela!: number;
  DataFaturamento!: Date;
  VlFaturamento!: number;
  

  static getFields() {
    return [
      "NumeroRAT",
      "NumParcela",
      "DataFaturamento",
      "VlFaturamento",
      ];
  }
}

FaturamentoRat.knex(connections.plano);

export type TFaturamentoRat = ModelObject<FaturamentoRat>;
