import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaVariavel extends ModelBase {
  static tableName = "tbl_Sistema_Variavel";
  static idColumn = ["kVar"];

  kVar!: string;
  Vlr!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "kVar",
      "Vlr",
      "Descricao",
      ];
  }
}

TblSistemaVariavel.knex(connections.oftalmo);

export type TTblSistemaVariavel = ModelObject<TblSistemaVariavel>;
