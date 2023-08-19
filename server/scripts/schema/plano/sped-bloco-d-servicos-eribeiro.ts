import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoDServicosEribeiro extends ModelBase {
  static tableName = "SpedBlocoDServicosERIBEIRO";
  static idColumn = [];

  CdCSTICMS!: number;
  CFOP!: number;
  VlAliqICMS!: number;
  VlOperacao!: number;
  VlBaseICMSItem!: number;
  VlICMSItem!: number;
  VlBaseICMSSTItem!: number;
  VlIcmsSTItem!: number;
  

  static getFields() {
    return [
      "CdCSTICMS",
      "CFOP",
      "VlAliqICMS",
      "VlOperacao",
      "VlBaseICMSItem",
      "VlICMSItem",
      "VlBaseICMSSTItem",
      "VlIcmsSTItem",
      ];
  }
}

SpedBlocoDServicosEribeiro.knex(connections.plano);

export type TSpedBlocoDServicosEribeiro = ModelObject<SpedBlocoDServicosEribeiro>;
