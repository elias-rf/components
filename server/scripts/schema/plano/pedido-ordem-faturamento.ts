import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoOrdemFaturamento extends ModelBase {
  static tableName = "PedidoOrdemFaturamento";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumOrdemFaturamento!: number;
  FgSituacao!: string;
  DtInclusao!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "NumOrdemFaturamento",
      "FgSituacao",
      "DtInclusao",
      "DtUltAlteracao",
      ];
  }
}

PedidoOrdemFaturamento.knex(connections.plano);

export type TPedidoOrdemFaturamento = ModelObject<PedidoOrdemFaturamento>;
