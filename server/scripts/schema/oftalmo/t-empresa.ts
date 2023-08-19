import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TEmpresa extends ModelBase {
  static tableName = "tEmpresa";
  static idColumn = ["kEmpresa"];

  kEmpresa!: number;
  NomeEmpresa!: string;
  CNPJ!: string;
  

  static getFields() {
    return [
      "kEmpresa",
      "NomeEmpresa",
      "CNPJ",
      ];
  }
}

TEmpresa.knex(connections.oftalmo);

export type TTEmpresa = ModelObject<TEmpresa>;
