import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MensagemPedidoEntrada extends ModelBase {
  static tableName = "MensagemPedidoEntrada";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  MensagemPedido!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "MensagemPedido",
      "DtUltAtualizacao",
      ];
  }
}

MensagemPedidoEntrada.knex(connections.plano);

export type TMensagemPedidoEntrada = ModelObject<MensagemPedidoEntrada>;
