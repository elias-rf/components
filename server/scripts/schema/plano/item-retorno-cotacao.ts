import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemRetornoCotacao extends ModelBase {
  static tableName = "ItemRetornoCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  CdFornecedor!: number;
  Sequencia!: number;
  Quantidade!: number;
  VlUnitario!: number;
  PercIcms!: number;
  VlFreteUnit!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "CdFornecedor",
      "Sequencia",
      "Quantidade",
      "VlUnitario",
      "PercIcms",
      "VlFreteUnit",
      ];
  }
}

ItemRetornoCotacao.knex(connections.plano);

export type TItemRetornoCotacao = ModelObject<ItemRetornoCotacao>;
