import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoMinMax extends ModelBase {
  static tableName = "tbl_Produto_MinMax";
  static idColumn = ["fkProdutoItem"];

  fkProdutoItem!: number;
  Minimo!: number;
  Media!: number;
  Maximo!: number;
  

  static getFields() {
    return [
      "fkProdutoItem",
      "Minimo",
      "Media",
      "Maximo",
      ];
  }
}

TblProdutoMinMax.knex(connections.oftalmo);

export type TTblProdutoMinMax = ModelObject<TblProdutoMinMax>;
