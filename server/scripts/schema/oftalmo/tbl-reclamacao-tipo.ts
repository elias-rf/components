import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblReclamacaoTipo extends ModelBase {
  static tableName = "tbl_Reclamacao_Tipo";
  static idColumn = ["kTipo"];

  kTipo!: string;
  

  static getFields() {
    return [
      "kTipo",
      ];
  }
}

TblReclamacaoTipo.knex(connections.oftalmo);

export type TTblReclamacaoTipo = ModelObject<TblReclamacaoTipo>;
