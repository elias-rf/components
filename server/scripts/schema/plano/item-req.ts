import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemReq extends ModelBase {
  static tableName = "ItemReq";
  static idColumn = [];

  CdFilial!: number;
  NumRequisicao!: number;
  CdProduto!: string;
  Quantidade!: number;
  TipoMovimentacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumRequisicao",
      "CdProduto",
      "Quantidade",
      "TipoMovimentacao",
      ];
  }
}

ItemReq.knex(connections.plano);

export type TItemReq = ModelObject<ItemReq>;
