import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueDiarioItem extends ModelBase {
  static tableName = "EstoqueDiarioItem";
  static idColumn = [];

  CdFilial!: number;
  DtBase!: Date;
  NumSerieECF!: string;
  CdProduto!: string;
  DescricaoProduto!: string;
  UnidadeProduto!: string;
  Quantidade!: number;
  ControleNum!: string;
  ControleData!: Date;
  CodigoNCM!: string;
  CEST!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtBase",
      "NumSerieECF",
      "CdProduto",
      "DescricaoProduto",
      "UnidadeProduto",
      "Quantidade",
      "ControleNum",
      "ControleData",
      "CodigoNCM",
      "CEST",
      ];
  }
}

EstoqueDiarioItem.knex(connections.plano);

export type TEstoqueDiarioItem = ModelObject<EstoqueDiarioItem>;
