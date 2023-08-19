import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CotacaoCassio extends ModelBase {
  static tableName = "CotacaoCASSIO";
  static idColumn = [];

  CdFornecedor!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlTabela!: number;
  VlLiquido!: number;
  

  static getFields() {
    return [
      "CdFornecedor",
      "CdProduto",
      "Quantidade",
      "VlTabela",
      "VlLiquido",
      ];
  }
}

CotacaoCassio.knex(connections.plano);

export type TCotacaoCassio = ModelObject<CotacaoCassio>;
