import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoLink extends ModelBase {
  static tableName = "ProdutoLink";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Link!: string;
  DtUltAlteracao!: Date;
  ID!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "Link",
      "DtUltAlteracao",
      "ID",
      ];
  }
}

ProdutoLink.knex(connections.plano);

export type TProdutoLink = ModelObject<ProdutoLink>;
