import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemCotacao extends ModelBase {
  static tableName = "ItemCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "Descricao",
      ];
  }
}

ItemCotacao.knex(connections.plano);

export type TItemCotacao = ModelObject<ItemCotacao>;
