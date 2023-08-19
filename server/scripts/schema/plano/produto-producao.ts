import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoProducao extends ModelBase {
  static tableName = "ProdutoProducao";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  CdLinhaProducao!: number;
  ImagemOrdemProducao!: string;
  EspecificacaoProducao!: string;
  EtiquetaExterna!: string;
  EtiquetaInterna!: string;


  static getFields() {
    return [
      "CdProduto",
      "CdLinhaProducao",
      "ImagemOrdemProducao",
      "EspecificacaoProducao",
      "EtiquetaExterna",
      "EtiquetaInterna",
      ];
  }
}

ProdutoProducao.knex(connections.plano);

export type TProdutoProducao = ModelObject<ProdutoProducao>;
