import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSolucaoControleLote extends ModelBase {
  static tableName = "tbl_Solucao_Controle_Lote";
  static idColumn = [];

  fkProdutoItem!: number;
  Quantidade!: number;
  Lote!: string;
  

  static getFields() {
    return [
      "fkProdutoItem",
      "Quantidade",
      "Lote",
      ];
  }
}

TblSolucaoControleLote.knex(connections.oftalmo);

export type TTblSolucaoControleLote = ModelObject<TblSolucaoControleLote>;
