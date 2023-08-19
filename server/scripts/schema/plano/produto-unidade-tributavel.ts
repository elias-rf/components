import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoUnidadeTributavel extends ModelBase {
  static tableName = "ProdutoUnidadeTributavel";
  static idColumn = [];

  CdEmpresa!: number;
  CdProduto!: string;
  UnidadeTributavel!: string;
  QtdeComercial!: number;
  QtdeTributavel!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "UnidadeTributavel",
      "QtdeComercial",
      "QtdeTributavel",
      ];
  }
}

ProdutoUnidadeTributavel.knex(connections.plano);

export type TProdutoUnidadeTributavel = ModelObject<ProdutoUnidadeTributavel>;
