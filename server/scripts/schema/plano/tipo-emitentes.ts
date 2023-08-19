import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoEmitentes extends ModelBase {
  static tableName = "TipoEmitentes";
  static idColumn = ["CdTipoEmitente"];

  CdTipoEmitente!: number;
  NmTipoEmitente!: string;
  

  static getFields() {
    return [
      "CdTipoEmitente",
      "NmTipoEmitente",
      ];
  }
}

TipoEmitentes.knex(connections.plano);

export type TTipoEmitentes = ModelObject<TipoEmitentes>;
