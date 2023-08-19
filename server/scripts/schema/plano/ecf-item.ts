import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfItem extends ModelBase {
  static tableName = "ECFItem";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  DtEmissao!: Date;
  Sequencia!: number;
  NumCupom!: number;
  NumCOO!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  VlTotal!: number;
  AliqImposto!: number;
  VlImposto!: number;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "DtEmissao",
      "Sequencia",
      "NumCupom",
      "NumCOO",
      "CdProduto",
      "Quantidade",
      "VlUnitario",
      "VlTotal",
      "AliqImposto",
      "VlImposto",
      ];
  }
}

EcfItem.knex(connections.plano);

export type TEcfItem = ModelObject<EcfItem>;
