import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MapaEntregaAcerto extends ModelBase {
  static tableName = "MapaEntregaAcerto";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  VlDinheiro!: number;
  VlCheque!: number;
  VlChequePre!: number;
  VlCartao!: number;
  VlDebito!: number;
  VlCrediario!: number;
  VlDevolucoes!: number;
  VlAntecipado!: number;
  VlRetorno!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "VlDinheiro",
      "VlCheque",
      "VlChequePre",
      "VlCartao",
      "VlDebito",
      "VlCrediario",
      "VlDevolucoes",
      "VlAntecipado",
      "VlRetorno",
      ];
  }
}

MapaEntregaAcerto.knex(connections.plano);

export type TMapaEntregaAcerto = ModelObject<MapaEntregaAcerto>;
