import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoPrecoCompra extends ModelBase {
  static tableName = "ConfiguracaoPrecoCompra";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  FgVlTabela!: string;
  FgVlCusto!: string;
  FgVlAtacado!: string;
  FgVlVarejo!: string;
  FgCalculoVlCusto!: string;
  FgLogPreco!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "FgVlTabela",
      "FgVlCusto",
      "FgVlAtacado",
      "FgVlVarejo",
      "FgCalculoVlCusto",
      "FgLogPreco",
      ];
  }
}

ConfiguracaoPrecoCompra.knex(connections.plano);

export type TConfiguracaoPrecoCompra = ModelObject<ConfiguracaoPrecoCompra>;
