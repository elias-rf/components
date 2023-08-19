import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoEntrega extends ModelBase {
  static tableName = "TipoEntrega";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  VlMinimo!: number;
  VlTaxaEntrega!: number;
  FgCalculaEntrega!: string;
  FgImprimePedido!: string;
  Impressora!: string;
  PercAdicional!: number;
  FiguraOrdemFaturamento!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      "VlMinimo",
      "VlTaxaEntrega",
      "FgCalculaEntrega",
      "FgImprimePedido",
      "Impressora",
      "PercAdicional",
      "FiguraOrdemFaturamento",
      "FgAtivo",
      ];
  }
}

TipoEntrega.knex(connections.plano);

export type TTipoEntrega = ModelObject<TipoEntrega>;
