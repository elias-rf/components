import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle10 extends ModelBase {
  static tableName = "Controle10";
  static idColumn = [];

  CdFilial!: number;
  DtBase!: Date;
  NumSerieECF!: string;
  CdProduto!: string;
  DescricaoProduto!: string;
  UnidadeProduto!: string;
  Quantidade!: number;
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
      "CodigoNCM",
      "CEST",
      ];
  }
}

Controle10.knex(connections.plano);

export type TControle10 = ModelObject<Controle10>;
