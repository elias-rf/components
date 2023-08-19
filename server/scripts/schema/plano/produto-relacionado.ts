import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoRelacionado extends ModelBase {
  static tableName = "ProdutoRelacionado";
  static idColumn = [];

  CdProduto!: string;
  CdProdutoRelacionado!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "CdProdutoRelacionado",
      "DtUltAlteracao",
      ];
  }
}

ProdutoRelacionado.knex(connections.plano);

export type TProdutoRelacionado = ModelObject<ProdutoRelacionado>;
