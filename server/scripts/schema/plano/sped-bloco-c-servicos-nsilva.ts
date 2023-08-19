import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoCServicosNsilva extends ModelBase {
  static tableName = "SpedBlocoCServicosNSILVA";
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

SpedBlocoCServicosNsilva.knex(connections.plano);

export type TSpedBlocoCServicosNsilva = ModelObject<SpedBlocoCServicosNsilva>;
