import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestrePedidoDescritivo extends ModelBase {
  static tableName = "MestrePedidoDescritivo";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Cabecalho!: string;
  Rodape!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Cabecalho",
      "Rodape",
      ];
  }
}

MestrePedidoDescritivo.knex(connections.plano);

export type TMestrePedidoDescritivo = ModelObject<MestrePedidoDescritivo>;
