import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpAssoc extends ModelBase {
  static tableName = "ConfiguracaoImpAssoc";
  static idColumn = ["IdModeloArquivo"];

  IdModeloArquivo!: string;
  PosicaoProduto!: number;
  TamanhoProduto!: number;
  PosicaoCdReferencia!: number;
  TamanhoCdReferencia!: number;
  PosicaoQtdeEmbalagem!: number;
  TamanhoQtdeEmbalagem!: number;
  

  static getFields() {
    return [
      "IdModeloArquivo",
      "PosicaoProduto",
      "TamanhoProduto",
      "PosicaoCdReferencia",
      "TamanhoCdReferencia",
      "PosicaoQtdeEmbalagem",
      "TamanhoQtdeEmbalagem",
      ];
  }
}

ConfiguracaoImpAssoc.knex(connections.plano);

export type TConfiguracaoImpAssoc = ModelObject<ConfiguracaoImpAssoc>;
