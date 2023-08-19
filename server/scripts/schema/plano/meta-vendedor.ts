import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MetaVendedor extends ModelBase {
  static tableName = "MetaVendedor";
  static idColumn = [];

  CdVendedor!: number;
  MesReferencia!: Date;
  VlMeta!: number;
  QtdeMeta!: number;
  VlRealizado!: number;
  QtdeRealizado!: number;
  

  static getFields() {
    return [
      "CdVendedor",
      "MesReferencia",
      "VlMeta",
      "QtdeMeta",
      "VlRealizado",
      "QtdeRealizado",
      ];
  }
}

MetaVendedor.knex(connections.plano);

export type TMetaVendedor = ModelObject<MetaVendedor>;
