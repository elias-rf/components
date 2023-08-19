import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CfopSugestaoCompras extends ModelBase {
  static tableName = "CFOPSugestaoCompras";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  UFFornecedor!: string;
  TipoMercadoria!: number;
  FgCompoeGNRE!: string;
  CFOPXML!: number;
  CFOPSugestao!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "UFFornecedor",
      "TipoMercadoria",
      "FgCompoeGNRE",
      "CFOPXML",
      "CFOPSugestao",
      ];
  }
}

CfopSugestaoCompras.knex(connections.plano);

export type TCfopSugestaoCompras = ModelObject<CfopSugestaoCompras>;
