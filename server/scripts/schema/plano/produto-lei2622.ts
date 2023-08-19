import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoLei2622 extends ModelBase {
  static tableName = "ProdutoLei2622";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  UnidadeMedida!: string;
  Operacao!: string;
  Multiplicador!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "UnidadeMedida",
      "Operacao",
      "Multiplicador",
      ];
  }
}

ProdutoLei2622.knex(connections.plano);

export type TProdutoLei2622 = ModelObject<ProdutoLei2622>;
