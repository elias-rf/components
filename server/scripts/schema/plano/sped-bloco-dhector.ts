import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoDhector extends ModelBase {
  static tableName = "SpedBlocoDHECTOR";
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

SpedBlocoDhector.knex(connections.plano);

export type TSpedBlocoDhector = ModelObject<SpedBlocoDhector>;
