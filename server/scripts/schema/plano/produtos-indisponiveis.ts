import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutosIndisponiveis extends ModelBase {
  static tableName = "ProdutosIndisponiveis";
  static idColumn = [];

  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  FgStatus!: string;
  FgMotivo!: string;
  Observacao!: string;
  DtLcto!: Date;
  CdFilial!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "NumLote",
      "Quantidade",
      "FgStatus",
      "FgMotivo",
      "Observacao",
      "DtLcto",
      "CdFilial",
      ];
  }
}

ProdutosIndisponiveis.knex(connections.plano);

export type TProdutosIndisponiveis = ModelObject<ProdutosIndisponiveis>;
