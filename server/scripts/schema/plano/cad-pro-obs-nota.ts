import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProObsNota extends ModelBase {
  static tableName = "CadProObsNota";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  DtUltAlteracao!: Date;
  ObsComplementar!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "DtUltAlteracao",
      "ObsComplementar",
      ];
  }
}

CadProObsNota.knex(connections.plano);

export type TCadProObsNota = ModelObject<CadProObsNota>;
