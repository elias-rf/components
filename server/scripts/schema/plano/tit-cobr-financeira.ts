import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCobrFinanceira extends ModelBase {
  static tableName = "TitCobrFinanceira";
  static idColumn = [];

  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  CdFinanceira!: number;
  NumParcelas!: number;
  VlParcela!: number;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      "CdFinanceira",
      "NumParcelas",
      "VlParcela",
      "DtUltAtualizacao",
      ];
  }
}

TitCobrFinanceira.knex(connections.plano);

export type TTitCobrFinanceira = ModelObject<TitCobrFinanceira>;
