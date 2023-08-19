import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreBalanco extends ModelBase {
  static tableName = "MestreBalanco";
  static idColumn = [];

  CdFilial!: number;
  NumBalanco!: number;
  DtRelatorio!: Date;
  UsuarioRelatorio!: string;
  DtValidacao!: Date;
  UsuarioValidacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumBalanco",
      "DtRelatorio",
      "UsuarioRelatorio",
      "DtValidacao",
      "UsuarioValidacao",
      ];
  }
}

MestreBalanco.knex(connections.plano);

export type TMestreBalanco = ModelObject<MestreBalanco>;
