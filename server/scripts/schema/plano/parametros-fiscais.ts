import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosFiscais extends ModelBase {
  static tableName = "ParametrosFiscais";
  static idColumn = ["IdParametro"];

  IdParametro!: number;
  Descricao!: string;
  TipoMovimentacao!: string;
  CriterioSubstituicao!: string;
  FgDetalhaItem!: string;
  FgAtualizaTabela!: string;
  FgAtualizaAtacado!: string;
  FgAtualizaCusto!: string;
  FgAtualizaPreco!: string;
  FgConferePreco!: string;
  FgPedido!: string;
  FgIntegraCP!: string;
  FgIntegraCR!: string;
  LimiteArredondamento!: number;
  

  static getFields() {
    return [
      "IdParametro",
      "Descricao",
      "TipoMovimentacao",
      "CriterioSubstituicao",
      "FgDetalhaItem",
      "FgAtualizaTabela",
      "FgAtualizaAtacado",
      "FgAtualizaCusto",
      "FgAtualizaPreco",
      "FgConferePreco",
      "FgPedido",
      "FgIntegraCP",
      "FgIntegraCR",
      "LimiteArredondamento",
      ];
  }
}

ParametrosFiscais.knex(connections.plano);

export type TParametrosFiscais = ModelObject<ParametrosFiscais>;
