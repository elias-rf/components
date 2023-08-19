import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProducaoEtiqueta extends ModelBase {
  static tableName = "tbl_producao_etiqueta";
  static idColumn = ["NumControle"];

  NumControle!: string;
  fkProdutoItem!: number;
  DataInsercao!: Date;
  

  static getFields() {
    return [
      "NumControle",
      "fkProdutoItem",
      "DataInsercao",
      ];
  }
}

TblProducaoEtiqueta.knex(connections.oftalmo);

export type TTblProducaoEtiqueta = ModelObject<TblProducaoEtiqueta>;
