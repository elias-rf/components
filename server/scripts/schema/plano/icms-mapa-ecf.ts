import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class IcmsMapaEcf extends ModelBase {
  static tableName = "ICMSMapaECF";
  static idColumn = [];

  CdFilial!: number;
  DtMapa!: Date;
  NumECF!: number;
  AliqICMS!: number;
  VlBaseCalculo!: number;
  VlICMS!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtMapa",
      "NumECF",
      "AliqICMS",
      "VlBaseCalculo",
      "VlICMS",
      ];
  }
}

IcmsMapaEcf.knex(connections.plano);

export type TIcmsMapaEcf = ModelObject<IcmsMapaEcf>;
