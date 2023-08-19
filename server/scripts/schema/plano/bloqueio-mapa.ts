import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BloqueioMapa extends ModelBase {
  static tableName = "BloqueioMapa";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  Estacao!: string;
  Usuario!: string;
  Funcao!: string;
  DtBloqueio!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "Estacao",
      "Usuario",
      "Funcao",
      "DtBloqueio",
      ];
  }
}

BloqueioMapa.knex(connections.plano);

export type TBloqueioMapa = ModelObject<BloqueioMapa>;
