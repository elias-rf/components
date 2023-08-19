import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaAutoNumber extends ModelBase {
  static tableName = "tbl_Sistema_AutoNumber";
  static idColumn = ["Tabela"];

  Tabela!: string;
  Campo!: string;
  NextID!: number;
  

  static getFields() {
    return [
      "Tabela",
      "Campo",
      "NextID",
      ];
  }
}

TblSistemaAutoNumber.knex(connections.oftalmo);

export type TTblSistemaAutoNumber = ModelObject<TblSistemaAutoNumber>;
