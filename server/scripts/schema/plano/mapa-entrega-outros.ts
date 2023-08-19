import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MapaEntregaOutros extends ModelBase {
  static tableName = "MapaEntregaOutros";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  NumDoc!: number;
  Serie!: string;
  Tipo!: string;
  Valor!: number;
  TipoAssoc!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "NumDoc",
      "Serie",
      "Tipo",
      "Valor",
      "TipoAssoc",
      ];
  }
}

MapaEntregaOutros.knex(connections.plano);

export type TMapaEntregaOutros = ModelObject<MapaEntregaOutros>;
