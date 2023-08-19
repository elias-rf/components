import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaXmlDescProduto extends ModelBase {
  static tableName = "NotaEntradaXMLDescProduto";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumeroNota!: number;
  SerieNota!: string;
  ModeloNota!: string;
  CdFornecedor!: number;
  Sequencia!: number;
  DescricaoProdutoXML!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumeroNota",
      "SerieNota",
      "ModeloNota",
      "CdFornecedor",
      "Sequencia",
      "DescricaoProdutoXML",
      ];
  }
}

NotaEntradaXmlDescProduto.knex(connections.plano);

export type TNotaEntradaXmlDescProduto = ModelObject<NotaEntradaXmlDescProduto>;
