import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoCategoriaTipo extends ModelBase {
  static tableName = "tbl_Produto_Categoria_Tipo";
  static idColumn = ["kCategoriaTipo"];

  kCategoriaTipo!: number;
  CategoriaTipo!: string;
  

  static getFields() {
    return [
      "kCategoriaTipo",
      "CategoriaTipo",
      ];
  }
}

TblProdutoCategoriaTipo.knex(connections.oftalmo);

export type TTblProdutoCategoriaTipo = ModelObject<TblProdutoCategoriaTipo>;
