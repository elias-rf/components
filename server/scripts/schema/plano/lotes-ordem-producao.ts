import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesOrdemProducao extends ModelBase {
  static tableName = "LotesOrdemProducao";
  static idColumn = [];

  NumFormula!: number;
  CdFilial!: number;
  CdProduto!: string;
  CdLote!: string;
  QtdeLote!: number;
  CdFase!: number;
  DtFabricacao!: Date;
  

  static getFields() {
    return [
      "NumFormula",
      "CdFilial",
      "CdProduto",
      "CdLote",
      "QtdeLote",
      "CdFase",
      "DtFabricacao",
      ];
  }
}

LotesOrdemProducao.knex(connections.plano);

export type TLotesOrdemProducao = ModelObject<LotesOrdemProducao>;
