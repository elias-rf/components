import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoTributacao extends ModelBase {
  static tableName = "ProdutoTributacao";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  FgCompoeBaseIRRF!: string;
  FgCompoeBaseIN381!: string;
  FgCompoeBaseISS!: string;
  Fg6142!: string;
  FgReducaoICMS!: string;
  FgReducaoICMSNC!: string;
  FgSubstituido030!: string;
  FgIsentoICMSPDV!: string;
  TipoTributacaoICMS!: string;
  AliquotaICMS!: number;
  ModDeterminacaoBCICMS!: number;
  ModDeterminacaoBCICMSSub!: number;
  SituacaoTributariaIPISaida!: string;
  AliquotaIPISaida!: number;
  SituacaoTributariaIPIEntrada!: string;
  AliquotaIPIEntrada!: number;
  CdEnquadramentoIPI!: string;
  ClasseEnquadramentoIPI!: string;
  CdSeloIPI!: string;
  SituacaoTributariaPISSaida!: string;
  AliquotaPISSaida!: number;
  SituacaoTributariaPISEntrada!: string;
  AliquotaPISEntrada!: number;
  SituacaoTributariaCOFINSSaida!: string;
  AliquotaCOFINSSaida!: number;
  SituacaoTributariaCOFINSEntrada!: string;
  AliquotaCOFINSEntrada!: number;
  DtUltAlteracao!: Date;
  AliquotaISS!: number;
  CdInformacaoComplementarNF!: number;
  PercentualMedioImposto!: string;
  VlBaseCalculoICMSSTAnterior!: number;
  VlICMSSTAnterior!: number;
  QuantidadeLitros!: number;
  VlIPILitro!: number;
  VlPISLitro!: number;
  VlCOFINSLitro!: number;
  NCMDV!: string;
  FgCompoeBlocoK!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "FgCompoeBaseIRRF",
      "FgCompoeBaseIN381",
      "FgCompoeBaseISS",
      "Fg6142",
      "FgReducaoICMS",
      "FgReducaoICMSNC",
      "FgSubstituido030",
      "FgIsentoICMSPDV",
      "TipoTributacaoICMS",
      "AliquotaICMS",
      "ModDeterminacaoBCICMS",
      "ModDeterminacaoBCICMSSub",
      "SituacaoTributariaIPISaida",
      "AliquotaIPISaida",
      "SituacaoTributariaIPIEntrada",
      "AliquotaIPIEntrada",
      "CdEnquadramentoIPI",
      "ClasseEnquadramentoIPI",
      "CdSeloIPI",
      "SituacaoTributariaPISSaida",
      "AliquotaPISSaida",
      "SituacaoTributariaPISEntrada",
      "AliquotaPISEntrada",
      "SituacaoTributariaCOFINSSaida",
      "AliquotaCOFINSSaida",
      "SituacaoTributariaCOFINSEntrada",
      "AliquotaCOFINSEntrada",
      "DtUltAlteracao",
      "AliquotaISS",
      "CdInformacaoComplementarNF",
      "PercentualMedioImposto",
      "VlBaseCalculoICMSSTAnterior",
      "VlICMSSTAnterior",
      "QuantidadeLitros",
      "VlIPILitro",
      "VlPISLitro",
      "VlCOFINSLitro",
      "NCMDV",
      "FgCompoeBlocoK",
      ];
  }
}

ProdutoTributacao.knex(connections.plano);

export type TProdutoTributacao = ModelObject<ProdutoTributacao>;
