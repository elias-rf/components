import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoComponente extends ModelBase {
  static tableName = "tbl_Produto_Componente";
  static idColumn = [];

  fkProduto!: number;
  fkProdutoComponente!: number;
  Qtd!: number;
  

  static getFields() {
    return [
      "fkProduto",
      "fkProdutoComponente",
      "Qtd",
      ];
  }
}

TblProdutoComponente.knex(connections.oftalmo);

export type TTblProdutoComponente = ModelObject<TblProdutoComponente>;
