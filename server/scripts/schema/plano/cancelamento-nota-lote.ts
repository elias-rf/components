import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoNotaLote extends ModelBase {
  static tableName = "CancelamentoNotaLote";
  static idColumn = [];

  cdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Sequencia!: number;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "cdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Sequencia",
      "CdProduto",
      "NumLote",
      "Quantidade",
      ];
  }
}

CancelamentoNotaLote.knex(connections.plano);

export type TCancelamentoNotaLote = ModelObject<CancelamentoNotaLote>;
