import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblReclamacaoCausa extends ModelBase {
  static tableName = "tbl_Reclamacao_Causa";
  static idColumn = ["kCausa"];

  kCausa!: string;
  

  static getFields() {
    return [
      "kCausa",
      ];
  }
}

TblReclamacaoCausa.knex(connections.oftalmo);

export type TTblReclamacaoCausa = ModelObject<TblReclamacaoCausa>;
