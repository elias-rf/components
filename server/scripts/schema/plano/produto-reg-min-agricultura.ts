import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoRegMinAgricultura extends ModelBase {
  static tableName = "ProdutoRegMinAgricultura";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  CdRegMinAgricAbastec!: string;
  CdN!: string;
  CdP!: string;
  CdK!: string;
  CdH2O!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdRegMinAgricAbastec",
      "CdN",
      "CdP",
      "CdK",
      "CdH2O",
      ];
  }
}

ProdutoRegMinAgricultura.knex(connections.plano);

export type TProdutoRegMinAgricultura = ModelObject<ProdutoRegMinAgricultura>;
