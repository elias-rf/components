import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoCobranca extends ModelBase {
  static tableName = "TipoCobranca";
  static idColumn = ["FgCobranca"];

  FgCobranca!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "FgCobranca",
      "Descricao",
      ];
  }
}

TipoCobranca.knex(connections.plano);

export type TTipoCobranca = ModelObject<TipoCobranca>;
