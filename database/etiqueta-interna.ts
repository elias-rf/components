import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class EtiquetaInterna extends ModelBase {
  static tableName = "tbl_producao_etiqueta";
  static idColumn = "NumControle";

  NumControle!: string;
  fkProdutoItem!: number;
  DataInsercao!: Date;

  static getFields() {
    return ["NumControle", "fkProdutoItem", "DataInsercao"];
  }
}

EtiquetaInterna.knex(connections.oftalmo);

export type TEtiquetaInterna = ModelObject<EtiquetaInterna>;
