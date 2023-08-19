import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoCategoria extends ModelBase {
  static tableName = "tbl_produto_categoria";
  static idColumn = ["kCategoria"];

  kCategoria!: string;
  Descricao!: string;
  Flag!: number;
  Controlado!: number;
  Tipo!: number;
  fkCategoriaTipo!: number;
  EhObjetivoVenda!: number;
  CategoriaComercial!: string;
  

  static getFields() {
    return [
      "kCategoria",
      "Descricao",
      "Flag",
      "Controlado",
      "Tipo",
      "fkCategoriaTipo",
      "EhObjetivoVenda",
      "CategoriaComercial",
      ];
  }
}

TblProdutoCategoria.knex(connections.oftalmo);

export type TTblProdutoCategoria = ModelObject<TblProdutoCategoria>;
