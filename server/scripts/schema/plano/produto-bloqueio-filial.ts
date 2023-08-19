import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoBloqueioFilial extends ModelBase {
  static tableName = "ProdutoBloqueioFilial";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdProduto!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdProduto",
      ];
  }
}

ProdutoBloqueioFilial.knex(connections.plano);

export type TProdutoBloqueioFilial = ModelObject<ProdutoBloqueioFilial>;
