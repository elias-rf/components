import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpConformidadeTipo extends ModelBase {
  static tableName = "tbl_OP_Conformidade_tipo";
  static idColumn = ["kConformidade"];

  kConformidade!: string;
  

  static getFields() {
    return [
      "kConformidade",
      ];
  }
}

TblOpConformidadeTipo.knex(connections.oftalmo);

export type TTblOpConformidadeTipo = ModelObject<TblOpConformidadeTipo>;
