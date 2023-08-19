import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Cidade extends ModelBase {
  static tableName = "Cidade";
  static idColumn = ["CdCidade"];

  CdCidade!: number;
  UF!: string;
  NmCidade!: string;
  

  static getFields() {
    return [
      "CdCidade",
      "UF",
      "NmCidade",
      ];
  }
}

Cidade.knex(connections.plano);

export type TCidade = ModelObject<Cidade>;
