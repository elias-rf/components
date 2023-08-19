import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutosAutorizacao extends ModelBase {
  static tableName = "ProdutosAutorizacao";
  static idColumn = [];

  Autorizador!: string;
  CdProduto!: string;
  

  static getFields() {
    return [
      "Autorizador",
      "CdProduto",
      ];
  }
}

ProdutosAutorizacao.knex(connections.plano);

export type TProdutosAutorizacao = ModelObject<ProdutosAutorizacao>;
