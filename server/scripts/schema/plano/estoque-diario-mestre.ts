import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueDiarioMestre extends ModelBase {
  static tableName = "EstoqueDiarioMestre";
  static idColumn = [];

  CdFilial!: number;
  DtBase!: Date;
  NumSerieECF!: string;
  MFAdicional!: string;
  TipoECF!: string;
  MarcaECF!: string;
  ModeloECF!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "DtBase",
      "NumSerieECF",
      "MFAdicional",
      "TipoECF",
      "MarcaECF",
      "ModeloECF",
      "DtUltAlteracao",
      ];
  }
}

EstoqueDiarioMestre.knex(connections.plano);

export type TEstoqueDiarioMestre = ModelObject<EstoqueDiarioMestre>;
