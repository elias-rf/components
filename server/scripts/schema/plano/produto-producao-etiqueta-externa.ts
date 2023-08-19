import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoProducaoEtiquetaExterna extends ModelBase {
  static tableName = "ProdutoProducaoEtiquetaExterna";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Etiqueta!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "Etiqueta",
      ];
  }
}

ProdutoProducaoEtiquetaExterna.knex(connections.plano);

export type TProdutoProducaoEtiquetaExterna = ModelObject<ProdutoProducaoEtiquetaExterna>;
