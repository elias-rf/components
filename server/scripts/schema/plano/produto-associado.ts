import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoAssociado extends ModelBase {
  static tableName = "ProdutoAssociado";
  static idColumn = [];

  CdProduto!: string;
  CdProdutoAssociado!: string;
  Fracao!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CdProdutoAssociado",
      "Fracao",
      ];
  }
}

ProdutoAssociado.knex(connections.plano);

export type TProdutoAssociado = ModelObject<ProdutoAssociado>;
