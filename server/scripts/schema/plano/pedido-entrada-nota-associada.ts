import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoEntradaNotaAssociada extends ModelBase {
  static tableName = "PedidoEntradaNotaAssociada";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumNotaFaturada!: number;
  SerieNotaFaturada!: string;
  ModeloNotaFaturada!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "NumNotaFaturada",
      "SerieNotaFaturada",
      "ModeloNotaFaturada",
      ];
  }
}

PedidoEntradaNotaAssociada.knex(connections.plano);

export type TPedidoEntradaNotaAssociada = ModelObject<PedidoEntradaNotaAssociada>;
