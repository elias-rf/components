import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SuporteObsDiaria extends ModelBase {
  static tableName = "SuporteObsDiaria";
  static idColumn = [];

  Usuario!: string;
  DtReferencia!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "Usuario",
      "DtReferencia",
      "Observacao",
      ];
  }
}

SuporteObsDiaria.knex(connections.plano);

export type TSuporteObsDiaria = ModelObject<SuporteObsDiaria>;
