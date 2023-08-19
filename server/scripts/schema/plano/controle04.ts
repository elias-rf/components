import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle04 extends ModelBase {
  static tableName = "Controle04";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  NumSerie!: string;
  DtBase!: Date;
  TipoReducao!: string;
  COOInicial!: number;
  COOFinal!: number;
  NumReducaoZ!: number;
  NumCOOReducao!: number;
  DtEmissaoReducao!: Date;
  HrEmissaoReducao!: Date;
  ContadorReinicio!: number;
  VlVendaBruta!: number;
  VlGrandeTotal!: number;
  VlAcrescimo!: number;
  VlNaoFiscal!: number;
  NumUsuario!: number;
  ParamDescISS!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "NumSerie",
      "DtBase",
      "TipoReducao",
      "COOInicial",
      "COOFinal",
      "NumReducaoZ",
      "NumCOOReducao",
      "DtEmissaoReducao",
      "HrEmissaoReducao",
      "ContadorReinicio",
      "VlVendaBruta",
      "VlGrandeTotal",
      "VlAcrescimo",
      "VlNaoFiscal",
      "NumUsuario",
      "ParamDescISS",
      "DtUltAlteracao",
      ];
  }
}

Controle04.knex(connections.plano);

export type TControle04 = ModelObject<Controle04>;
