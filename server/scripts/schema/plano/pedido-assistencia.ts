import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoAssistencia extends ModelBase {
  static tableName = "PedidoAssistencia";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  NumSerieEqpto!: string;
  DtLimiteGarantia!: Date;
  DescricaoEqpto!: string;
  DefeitoReclamado!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "NumSerieEqpto",
      "DtLimiteGarantia",
      "DescricaoEqpto",
      "DefeitoReclamado",
      ];
  }
}

PedidoAssistencia.knex(connections.plano);

export type TPedidoAssistencia = ModelObject<PedidoAssistencia>;
