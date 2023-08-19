import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoCodificacaoNve extends ModelBase {
  static tableName = "ProdutoCodificacaoNVE";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Link!: string;
  DtUltAlteracao!: Date;
  CodificacaoNVE!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "Link",
      "DtUltAlteracao",
      "CodificacaoNVE",
      ];
  }
}

ProdutoCodificacaoNve.knex(connections.plano);

export type TProdutoCodificacaoNve = ModelObject<ProdutoCodificacaoNve>;
