import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoAtualizacao extends ModelBase {
  static tableName = "ConfiguracaoAtualizacao";
  static idColumn = ["NumECF"];

  NumECF!: number;
  Caminho!: string;
  DtUltAtualizacao!: Date;
  NumUltLinhaMestre!: number;
  NumUltLinhaItem!: number;
  NumUltLinhaCaixa!: number;
  NumUltLinhaFinanceiro!: number;
  NumUltLinhaRecebimento!: number;
  NumUltLinhaDocumentoNaoFiscal!: number;
  NumUltLinhaMeiosPagamento!: number;
  

  static getFields() {
    return [
      "NumECF",
      "Caminho",
      "DtUltAtualizacao",
      "NumUltLinhaMestre",
      "NumUltLinhaItem",
      "NumUltLinhaCaixa",
      "NumUltLinhaFinanceiro",
      "NumUltLinhaRecebimento",
      "NumUltLinhaDocumentoNaoFiscal",
      "NumUltLinhaMeiosPagamento",
      ];
  }
}

ConfiguracaoAtualizacao.knex(connections.plano);

export type TConfiguracaoAtualizacao = ModelObject<ConfiguracaoAtualizacao>;
