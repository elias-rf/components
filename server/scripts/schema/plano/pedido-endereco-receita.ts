import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoEnderecoReceita extends ModelBase {
  static tableName = "PedidoEnderecoReceita";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  EnderecoReceita!: string;
  DtBusca!: Date;
  HrInicial!: Date;
  HrFinal!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "EnderecoReceita",
      "DtBusca",
      "HrInicial",
      "HrFinal",
      ];
  }
}

PedidoEnderecoReceita.knex(connections.plano);

export type TPedidoEnderecoReceita = ModelObject<PedidoEnderecoReceita>;
