import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoEscalaNaoRelevante extends ModelBase {
  static tableName = "ProdutoEscalaNaoRelevante";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  CNPJFabricante!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CNPJFabricante",
      ];
  }
}

ProdutoEscalaNaoRelevante.knex(connections.plano);

export type TProdutoEscalaNaoRelevante = ModelObject<ProdutoEscalaNaoRelevante>;
