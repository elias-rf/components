import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle03 extends ModelBase {
  static tableName = "Controle03";
  static idColumn = [];

  CNPJEmitente!: number;
  CdProduto!: string;
  DescricaoProduto!: string;
  VlUnitario!: number;
  SituacaoTributaria!: string;
  AliquotaICMS!: number;
  AliquotaISS!: number;
  CdFilial!: number;
  Unidade!: string;
  IAT!: string;
  IPPT!: string;
  CEST!: number;
  CodigoNCM!: string;
  

  static getFields() {
    return [
      "CNPJEmitente",
      "CdProduto",
      "DescricaoProduto",
      "VlUnitario",
      "SituacaoTributaria",
      "AliquotaICMS",
      "AliquotaISS",
      "CdFilial",
      "Unidade",
      "IAT",
      "IPPT",
      "CEST",
      "CodigoNCM",
      ];
  }
}

Controle03.knex(connections.plano);

export type TControle03 = ModelObject<Controle03>;
