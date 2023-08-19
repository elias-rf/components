import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaConcessionariaMestre extends ModelBase {
  static tableName = "NotaConcessionariaMestre";
  static idColumn = [];

  CdFilial!: number;
  Modelo!: string;
  Serie!: string;
  SubSerie!: string;
  NumDoc!: number;
  CdFornecedor!: number;
  FgSituacao!: string;
  DtEmissao!: Date;
  DtOperacao!: Date;
  CdClasseConsumo!: string;
  CdTipoLigacao!: number;
  CdGrupoTensao!: string;
  CdInfComplementar!: string;
  VlDocumento!: number;
  VlDesconto!: number;
  VlConsumido!: number;
  VlNaoTributado!: number;
  VlTerceiros!: number;
  VlDespesaAcessoria!: number;
  VlBaseCalculoICMS!: number;
  VlICMS!: number;
  VlBaseCalculoICMSST!: number;
  VlICMSST!: number;
  VlBaseCalculoPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCOFINS!: number;
  VlCOFINS!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "Modelo",
      "Serie",
      "SubSerie",
      "NumDoc",
      "CdFornecedor",
      "FgSituacao",
      "DtEmissao",
      "DtOperacao",
      "CdClasseConsumo",
      "CdTipoLigacao",
      "CdGrupoTensao",
      "CdInfComplementar",
      "VlDocumento",
      "VlDesconto",
      "VlConsumido",
      "VlNaoTributado",
      "VlTerceiros",
      "VlDespesaAcessoria",
      "VlBaseCalculoICMS",
      "VlICMS",
      "VlBaseCalculoICMSST",
      "VlICMSST",
      "VlBaseCalculoPIS",
      "VlPIS",
      "VlBaseCalculoCOFINS",
      "VlCOFINS",
      ];
  }
}

NotaConcessionariaMestre.knex(connections.plano);

export type TNotaConcessionariaMestre = ModelObject<NotaConcessionariaMestre>;
