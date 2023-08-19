import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MapaEntregaProtocoloItem extends ModelBase {
  static tableName = "MapaEntregaProtocoloItem";
  static idColumn = [];

  CdMapaEntregaProtocolo!: number;
  NumMapa!: number;
  NumDoc!: number;
  Serie!: string;
  NumPedido!: number;
  DtInsercao!: Date;
  DsObservacao!: string;
  

  static getFields() {
    return [
      "CdMapaEntregaProtocolo",
      "NumMapa",
      "NumDoc",
      "Serie",
      "NumPedido",
      "DtInsercao",
      "DsObservacao",
      ];
  }
}

MapaEntregaProtocoloItem.knex(connections.plano);

export type TMapaEntregaProtocoloItem = ModelObject<MapaEntregaProtocoloItem>;
