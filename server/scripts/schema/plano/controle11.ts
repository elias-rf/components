import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle11 extends ModelBase {
  static tableName = "Controle11";
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

Controle11.knex(connections.plano);

export type TControle11 = ModelObject<Controle11>;
