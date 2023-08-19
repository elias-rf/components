import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TProdutoSubCategoria extends ModelBase {
  static tableName = "tProdutoSubCategoria";
  static idColumn = ["kSubCategoria"];

  kSubCategoria!: number;
  SubCategoria!: string;
  Descricao!: string;
  fkCategoria!: string;
  

  static getFields() {
    return [
      "kSubCategoria",
      "SubCategoria",
      "Descricao",
      "fkCategoria",
      ];
  }
}

TProdutoSubCategoria.knex(connections.oftalmo);

export type TTProdutoSubCategoria = ModelObject<TProdutoSubCategoria>;
