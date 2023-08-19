import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoGrade extends ModelBase {
  static tableName = "ConfiguracaoGrade";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  FgClassificacaoMercadologica!: string;
  FgEmbalagem!: string;
  FgPrecoTabela!: string;
  FgPrecoCusto!: string;
  FgPrecoVenda!: string;
  FgPrecoPromocao!: string;
  FgAlteraFamilia!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "FgClassificacaoMercadologica",
      "FgEmbalagem",
      "FgPrecoTabela",
      "FgPrecoCusto",
      "FgPrecoVenda",
      "FgPrecoPromocao",
      "FgAlteraFamilia",
      ];
  }
}

ConfiguracaoGrade.knex(connections.plano);

export type TConfiguracaoGrade = ModelObject<ConfiguracaoGrade>;
