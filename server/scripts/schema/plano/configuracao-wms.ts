import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoWms extends ModelBase {
  static tableName = "ConfiguracaoWMS";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  FgAtivo!: string;
  FgGeraRemessaPedidos!: string;
  FgGeraRemessaRecebimento!: string;
  FgGeraRemessaProdutos!: string;
  CaminhoProdutos!: string;
  CaminhoFornecedores!: string;
  CaminhoRecebimento!: string;
  CaminhoPedidos!: string;
  CaminhoLeituraPedidos!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "FgAtivo",
      "FgGeraRemessaPedidos",
      "FgGeraRemessaRecebimento",
      "FgGeraRemessaProdutos",
      "CaminhoProdutos",
      "CaminhoFornecedores",
      "CaminhoRecebimento",
      "CaminhoPedidos",
      "CaminhoLeituraPedidos",
      ];
  }
}

ConfiguracaoWms.knex(connections.plano);

export type TConfiguracaoWms = ModelObject<ConfiguracaoWms>;
