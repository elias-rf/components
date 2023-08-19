import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpRaio extends ModelBase {
  static tableName = "tbl_OP_Raio";
  static idColumn = ["kRaio"];

  kRaio!: number;
  Dioptria!: number;
  Raio1!: number;
  Raio2!: number;
  Espessura!: number;
  Diametro!: number;
  Tipo!: string;
  

  static getFields() {
    return [
      "kRaio",
      "Dioptria",
      "Raio1",
      "Raio2",
      "Espessura",
      "Diametro",
      "Tipo",
      ];
  }
}

TblOpRaio.knex(connections.oftalmo);

export type TTblOpRaio = ModelObject<TblOpRaio>;
