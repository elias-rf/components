import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutosVendaEspecial extends ModelBase {
  static tableName = "ProdutosVendaEspecial";
  static idColumn = [];

  CRM!: string;
  CdProduto!: string;
  

  static getFields() {
    return [
      "CRM",
      "CdProduto",
      ];
  }
}

ProdutosVendaEspecial.knex(connections.plano);

export type TProdutosVendaEspecial = ModelObject<ProdutosVendaEspecial>;
