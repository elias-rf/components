import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoMapaEntrega extends ModelBase {
  static tableName = "HistoricoMapaEntrega";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  Sequencia!: number;
  Data!: Date;
  Usuario!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "Sequencia",
      "Data",
      "Usuario",
      "Observacao",
      ];
  }
}

HistoricoMapaEntrega.knex(connections.plano);

export type THistoricoMapaEntrega = ModelObject<HistoricoMapaEntrega>;
