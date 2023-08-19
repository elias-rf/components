import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LotesConferenciaPedido extends ModelBase {
  static tableName = "LotesConferenciaPedido";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  FgConferencia!: string;
  NumOrdemFaturamento!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "FgConferencia",
      "NumOrdemFaturamento",
      ];
  }
}

LotesConferenciaPedido.knex(connections.plano);

export type TLotesConferenciaPedido = ModelObject<LotesConferenciaPedido>;
