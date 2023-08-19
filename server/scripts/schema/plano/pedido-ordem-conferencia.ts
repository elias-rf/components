import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoOrdemConferencia extends ModelBase {
  static tableName = "PedidoOrdemConferencia";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumOrdemFaturamento!: number;
  FgSituacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "NumOrdemFaturamento",
      "FgSituacao",
      "DtUltAlteracao",
      ];
  }
}

PedidoOrdemConferencia.knex(connections.plano);

export type TPedidoOrdemConferencia = ModelObject<PedidoOrdemConferencia>;
