import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoTributacaoObservacao extends ModelBase {
  static tableName = "ProdutoTributacaoObservacao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdProduto!: string;
  CFOP!: number;
  Observacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdProduto",
      "CFOP",
      "Observacao",
      "DtUltAlteracao",
      ];
  }
}

ProdutoTributacaoObservacao.knex(connections.plano);

export type TProdutoTributacaoObservacao = ModelObject<ProdutoTributacaoObservacao>;
