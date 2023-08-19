import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesNota extends ModelBase {
  static tableName = "LotesNota";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Sequencia!: number;
  DtEmissao!: Date;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  Modelo!: string;
  Cdlote!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Sequencia",
      "DtEmissao",
      "CdProduto",
      "NumLote",
      "Quantidade",
      "Modelo",
      "Cdlote",
      ];
  }
}

LotesNota.knex(connections.plano);

export type TLotesNota = ModelObject<LotesNota>;
