import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaNcm extends ModelBase {
  static tableName = "tbl_Sistema_NCM";
  static idColumn = ["KNCM"];

  KNCM!: number;
  NCM!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "KNCM",
      "NCM",
      "Descricao",
      ];
  }
}

TblSistemaNcm.knex(connections.oftalmo);

export type TTblSistemaNcm = ModelObject<TblSistemaNcm>;
