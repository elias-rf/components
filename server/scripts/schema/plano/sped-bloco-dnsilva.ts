import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoDnsilva extends ModelBase {
  static tableName = "SpedBlocoDNSILVA";
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

SpedBlocoDnsilva.knex(connections.plano);

export type TSpedBlocoDnsilva = ModelObject<SpedBlocoDnsilva>;
