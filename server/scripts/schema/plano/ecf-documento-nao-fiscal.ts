import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfDocumentoNaoFiscal extends ModelBase {
  static tableName = "ECFDocumentoNaoFiscal";
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
  ControleSerie!: string;
  ControleCOO!: number;
  

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
      "ControleSerie",
      "ControleCOO",
      ];
  }
}

EcfDocumentoNaoFiscal.knex(connections.plano);

export type TEcfDocumentoNaoFiscal = ModelObject<EcfDocumentoNaoFiscal>;
