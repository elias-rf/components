import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle08 extends ModelBase {
  static tableName = "Controle08";
  static idColumn = [];

  NumSerie!: string;
  DtBase!: Date;
  NumCOO!: number;
  TipoDoc!: string;
  NumGNF!: number;
  NumGRG!: number;
  numCDC!: number;
  DtEmissao!: Date;
  HrEmissao!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "NumSerie",
      "DtBase",
      "NumCOO",
      "TipoDoc",
      "NumGNF",
      "NumGRG",
      "numCDC",
      "DtEmissao",
      "HrEmissao",
      "DtUltAlteracao",
      ];
  }
}

Controle08.knex(connections.plano);

export type TControle08 = ModelObject<Controle08>;
