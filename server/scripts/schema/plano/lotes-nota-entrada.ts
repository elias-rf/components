import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesNotaEntrada extends ModelBase {
  static tableName = "LotesNotaEntrada";
  static idColumn = [];

  NumNota!: number;
  CdFornecedor!: number;
  Serie!: string;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  CdFilial!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "NumNota",
      "CdFornecedor",
      "Serie",
      "CdProduto",
      "NumLote",
      "Quantidade",
      "CdFilial",
      "Modelo",
      ];
  }
}

LotesNotaEntrada.knex(connections.plano);

export type TLotesNotaEntrada = ModelObject<LotesNotaEntrada>;
