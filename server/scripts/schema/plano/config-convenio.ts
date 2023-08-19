import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigConvenio extends ModelBase {
  static tableName = "ConfigConvenio";
  static idColumn = [];

  CdCliente!: number;
  Tipo!: string;
  Codigo!: string;
  FgPermissao!: string;
  PercDesconto!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "Tipo",
      "Codigo",
      "FgPermissao",
      "PercDesconto",
      ];
  }
}

ConfigConvenio.knex(connections.plano);

export type TConfigConvenio = ModelObject<ConfigConvenio>;
