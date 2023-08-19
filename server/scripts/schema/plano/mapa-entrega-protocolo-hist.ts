import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MapaEntregaProtocoloHist extends ModelBase {
  static tableName = "MapaEntregaProtocoloHist";
  static idColumn = [];

  CdMapaEntregaProtocolo!: number;
  DtHistorico!: Date;
  DsHistorico!: string;
  

  static getFields() {
    return [
      "CdMapaEntregaProtocolo",
      "DtHistorico",
      "DsHistorico",
      ];
  }
}

MapaEntregaProtocoloHist.knex(connections.plano);

export type TMapaEntregaProtocoloHist = ModelObject<MapaEntregaProtocoloHist>;
