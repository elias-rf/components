import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";

export class NfEntradaControle extends ModelBase {
  static tableName = "LotesNotaEntrada";
  static idColumn = ["CdFilial", "NumNota", "Serie", "Modelo"];

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

NfEntradaControle.knex(connections.plano);
