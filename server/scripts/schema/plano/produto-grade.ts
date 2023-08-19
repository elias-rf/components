import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoGrade extends ModelBase {
  static tableName = "ProdutoGrade";
  static idColumn = [];

  CdMestreGrade!: string;
  CdProduto!: string;
  

  static getFields() {
    return [
      "CdMestreGrade",
      "CdProduto",
      ];
  }
}

ProdutoGrade.knex(connections.plano);

export type TProdutoGrade = ModelObject<ProdutoGrade>;
