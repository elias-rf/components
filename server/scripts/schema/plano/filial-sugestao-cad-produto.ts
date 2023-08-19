import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialSugestaoCadProduto extends ModelBase {
  static tableName = "FilialSugestaoCadProduto";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  TipoTributacaoICMS!: string;
  AliquotaICMS!: string;
  PercReducaoICMSST!: string;
  FgReducaoICMSContribuinte!: string;
  FgReducaoICMSNaoContribuinte!: string;
  FgCompoeDeducaoICMS!: string;
  FgIsentoICMSECF!: string;
  FgIsentoSubstituido030!: string;
  ModDeterminacaoBCICMS!: string;
  ModDeterminacaoBCICMSSub!: string;
  CSTIPIEntrada!: string;
  AliquotaIPIEntrada!: string;
  CSTIPISaida!: string;
  AliquotaIPISaida!: string;
  CdEnquadramentoIPI!: string;
  ClasseEnquadramentoIPI!: string;
  CdSeloIPI!: string;
  CSTPISEntrada!: string;
  AliquotaPISEntrada!: string;
  CSTPISSaida!: string;
  AliquotaPISSaida!: string;
  CSTCOFINSEntrada!: string;
  AliquotaCOFINSEntrada!: string;
  CSTCOFINSSaida!: string;
  AliquotaCOFINSSaida!: string;
  FgCompoeBaseISS!: string;
  AliquotaISS!: string;
  CdServico!: string;
  FgCompoeBlocoK!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "TipoTributacaoICMS",
      "AliquotaICMS",
      "PercReducaoICMSST",
      "FgReducaoICMSContribuinte",
      "FgReducaoICMSNaoContribuinte",
      "FgCompoeDeducaoICMS",
      "FgIsentoICMSECF",
      "FgIsentoSubstituido030",
      "ModDeterminacaoBCICMS",
      "ModDeterminacaoBCICMSSub",
      "CSTIPIEntrada",
      "AliquotaIPIEntrada",
      "CSTIPISaida",
      "AliquotaIPISaida",
      "CdEnquadramentoIPI",
      "ClasseEnquadramentoIPI",
      "CdSeloIPI",
      "CSTPISEntrada",
      "AliquotaPISEntrada",
      "CSTPISSaida",
      "AliquotaPISSaida",
      "CSTCOFINSEntrada",
      "AliquotaCOFINSEntrada",
      "CSTCOFINSSaida",
      "AliquotaCOFINSSaida",
      "FgCompoeBaseISS",
      "AliquotaISS",
      "CdServico",
      "FgCompoeBlocoK",
      ];
  }
}

FilialSugestaoCadProduto.knex(connections.plano);

export type TFilialSugestaoCadProduto = ModelObject<FilialSugestaoCadProduto>;
