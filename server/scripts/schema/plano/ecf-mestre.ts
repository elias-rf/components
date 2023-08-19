import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfMestre extends ModelBase {
  static tableName = "ECFMestre";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  DtBase!: Date;
  COOInicial!: number;
  COOFinal!: number;
  NumReducaoZ!: number;
  ContadorReinicio!: number;
  VlVendaBruta!: number;
  VlTotalizador!: number;
  NumSerie!: string;
  TipoReducao!: string;
  NumCOOReducao!: number;
  DtEmissaoReducao!: Date;
  HrEmissaoReducao!: Date;
  NumUsuario!: number;
  ParamDescISS!: string;
  VlGrandeTotal!: number;
  VlNaoFiscal!: number;
  VlAcrescimo!: number;
  DtUltAlteracao!: Date;
  ControleFilial!: number;
  ControleECF!: number;
  ControleSerie!: string;
  ControleData!: Date;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "DtBase",
      "COOInicial",
      "COOFinal",
      "NumReducaoZ",
      "ContadorReinicio",
      "VlVendaBruta",
      "VlTotalizador",
      "NumSerie",
      "TipoReducao",
      "NumCOOReducao",
      "DtEmissaoReducao",
      "HrEmissaoReducao",
      "NumUsuario",
      "ParamDescISS",
      "VlGrandeTotal",
      "VlNaoFiscal",
      "VlAcrescimo",
      "DtUltAlteracao",
      "ControleFilial",
      "ControleECF",
      "ControleSerie",
      "ControleData",
      ];
  }
}

EcfMestre.knex(connections.plano);

export type TEcfMestre = ModelObject<EcfMestre>;
