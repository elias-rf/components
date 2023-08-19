import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MarcaEqpto extends ModelBase {
  static tableName = "MarcaEqpto";
  static idColumn = ["CdMarcaEqpto"];

  CdMarcaEqpto!: number;
  NmMarcaEqpto!: string;
  

  static getFields() {
    return [
      "CdMarcaEqpto",
      "NmMarcaEqpto",
      ];
  }
}

MarcaEqpto.knex(connections.plano);

export type TMarcaEqpto = ModelObject<MarcaEqpto>;
