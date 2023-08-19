import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutosRemessa extends ModelBase {
  static tableName = "ProdutosRemessa";
  static idColumn = [];

  CdProduto!: string;
  IdLayOut!: string;
  FgRemessa!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "IdLayOut",
      "FgRemessa",
      "DtUltAlteracao",
      ];
  }
}

ProdutosRemessa.knex(connections.plano);

export type TProdutosRemessa = ModelObject<ProdutosRemessa>;
