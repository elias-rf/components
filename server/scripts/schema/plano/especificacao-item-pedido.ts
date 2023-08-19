import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EspecificacaoItemPedido extends ModelBase {
  static tableName = "EspecificacaoItemPedido";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  Especificacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "Especificacao",
      ];
  }
}

EspecificacaoItemPedido.knex(connections.plano);

export type TEspecificacaoItemPedido = ModelObject<EspecificacaoItemPedido>;
