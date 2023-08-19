import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreLancTransporte extends ModelBase {
  static tableName = "MestreLancTransporte";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  DtEmissao!: Date;
  DtAquisicao!: Date;
  Nop!: number;
  TipoFrete!: number;
  VlDocumento!: number;
  VlDesconto!: number;
  VlServico!: number;
  ICMSBasCalc!: number;
  VlICMS!: number;
  VlNaoTributado!: number;
  IndicadorNatFrete!: number;
  NumChaveNFE!: string;
  SituacaoDoc!: number;
  ObsGerais!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "DtEmissao",
      "DtAquisicao",
      "Nop",
      "TipoFrete",
      "VlDocumento",
      "VlDesconto",
      "VlServico",
      "ICMSBasCalc",
      "VlICMS",
      "VlNaoTributado",
      "IndicadorNatFrete",
      "NumChaveNFE",
      "SituacaoDoc",
      "ObsGerais",
      ];
  }
}

MestreLancTransporte.knex(connections.plano);

export type TMestreLancTransporte = ModelObject<MestreLancTransporte>;
