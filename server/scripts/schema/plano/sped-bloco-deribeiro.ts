import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoDeribeiro extends ModelBase {
  static tableName = "SpedBlocoDERIBEIRO";
  static idColumn = [];

  CdCSTICMS!: number;
  CFOP!: number;
  VlAliqICMS!: number;
  VlOperacao!: number;
  VlBaseICMSItem!: number;
  VlICMSItem!: number;
  

  static getFields() {
    return [
      "CdCSTICMS",
      "CFOP",
      "VlAliqICMS",
      "VlOperacao",
      "VlBaseICMSItem",
      "VlICMSItem",
      ];
  }
}

SpedBlocoDeribeiro.knex(connections.plano);

export type TSpedBlocoDeribeiro = ModelObject<SpedBlocoDeribeiro>;
