import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoCupomLote extends ModelBase {
  static tableName = "CancelamentoCupomLote";
  static idColumn = [];

  cdFilial!: number;
  NumCupom!: number;
  Sequencia!: number;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "cdFilial",
      "NumCupom",
      "Sequencia",
      "CdProduto",
      "NumLote",
      "Quantidade",
      ];
  }
}

CancelamentoCupomLote.knex(connections.plano);

export type TCancelamentoCupomLote = ModelObject<CancelamentoCupomLote>;
