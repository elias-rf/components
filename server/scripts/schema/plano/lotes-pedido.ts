import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesPedido extends ModelBase {
  static tableName = "LotesPedido";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  NumOrdemFaturamento!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "NumLote",
      "Quantidade",
      "NumOrdemFaturamento",
      ];
  }
}

LotesPedido.knex(connections.plano);

export type TLotesPedido = ModelObject<LotesPedido>;
