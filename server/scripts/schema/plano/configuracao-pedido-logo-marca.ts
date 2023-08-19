import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoPedidoLogoMarca extends ModelBase {
  static tableName = "ConfiguracaoPedidoLogoMarca";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Imagem!: any;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Imagem",
      ];
  }
}

ConfiguracaoPedidoLogoMarca.knex(connections.plano);

export type TConfiguracaoPedidoLogoMarca = ModelObject<ConfiguracaoPedidoLogoMarca>;
