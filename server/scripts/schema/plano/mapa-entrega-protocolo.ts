import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MapaEntregaProtocolo extends ModelBase {
  static tableName = "MapaEntregaProtocolo";
  static idColumn = [];

  CdMapaEntregaProtocolo!: number;
  DtProtocolo!: Date;
  

  static getFields() {
    return [
      "CdMapaEntregaProtocolo",
      "DtProtocolo",
      ];
  }
}

MapaEntregaProtocolo.knex(connections.plano);

export type TMapaEntregaProtocolo = ModelObject<MapaEntregaProtocolo>;
