import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpPreco extends ModelBase {
  static tableName = "ConfiguracaoImpPreco";
  static idColumn = ["IdModeloArquivo"];

  IdModeloArquivo!: string;
  PosicaoProduto!: number;
  TamanhoProduto!: number;
  PosicaoTabela!: number;
  TamanhoTabela!: number;
  DecimaisTabela!: number;
  PosicaoVenda!: number;
  TamanhoVenda!: number;
  DecimaisVenda!: number;
  

  static getFields() {
    return [
      "IdModeloArquivo",
      "PosicaoProduto",
      "TamanhoProduto",
      "PosicaoTabela",
      "TamanhoTabela",
      "DecimaisTabela",
      "PosicaoVenda",
      "TamanhoVenda",
      "DecimaisVenda",
      ];
  }
}

ConfiguracaoImpPreco.knex(connections.plano);

export type TConfiguracaoImpPreco = ModelObject<ConfiguracaoImpPreco>;
