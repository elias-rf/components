import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SuporteHorarios extends ModelBase {
  static tableName = "SuporteHorarios";
  static idColumn = [];

  Usuario!: string;
  DataHoraReferencia!: Date;
  TipoMovimentacao!: string;
  

  static getFields() {
    return [
      "Usuario",
      "DataHoraReferencia",
      "TipoMovimentacao",
      ];
  }
}

SuporteHorarios.knex(connections.plano);

export type TSuporteHorarios = ModelObject<SuporteHorarios>;
