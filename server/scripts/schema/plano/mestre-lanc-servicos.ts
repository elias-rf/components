import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreLancServicos extends ModelBase {
  static tableName = "MestreLancServicos";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  SubSerie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  DtEmissao!: Date;
  DtEntrada!: Date;
  VlDocumento!: number;
  VlDesconto!: number;
  VlServico!: number;
  VlTerceiros!: number;
  VlDespesas!: number;
  VlBaseCalculoICMS!: number;
  VlICMS!: number;
  VlBaseCalculoICMSST!: number;
  VlICMSST!: number;
  VlNaoTributado!: number;
  VlPIS!: number;
  VlCOFINS!: number;
  CdLigacao!: number;
  CdTensao!: number;
  SituacaoDoc!: number;
  TipoServico!: number;
  CdClasse!: number;
  CdAssinante!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "SubSerie",
      "Modelo",
      "CdFornecedor",
      "DtEmissao",
      "DtEntrada",
      "VlDocumento",
      "VlDesconto",
      "VlServico",
      "VlTerceiros",
      "VlDespesas",
      "VlBaseCalculoICMS",
      "VlICMS",
      "VlBaseCalculoICMSST",
      "VlICMSST",
      "VlNaoTributado",
      "VlPIS",
      "VlCOFINS",
      "CdLigacao",
      "CdTensao",
      "SituacaoDoc",
      "TipoServico",
      "CdClasse",
      "CdAssinante",
      ];
  }
}

MestreLancServicos.knex(connections.plano);

export type TMestreLancServicos = ModelObject<MestreLancServicos>;
