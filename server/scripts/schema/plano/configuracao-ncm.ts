import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNcm extends ModelBase {
  static tableName = "ConfiguracaoNCM";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NCM!: string;
  DV!: string;
  Descricao!: string;
  CEST!: string;
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
  CSTPISCOFINSEntrada!: string;
  AliquotaPISEntrada!: string;
  CSTPISCOFINSSaida!: string;
  AliquotaCOFINSEntrada!: string;
  AliquotaPISSaida!: string;
  AliquotaCOFINSSaida!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NCM",
      "DV",
      "Descricao",
      "CEST",
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
      "CSTPISCOFINSEntrada",
      "AliquotaPISEntrada",
      "CSTPISCOFINSSaida",
      "AliquotaCOFINSEntrada",
      "AliquotaPISSaida",
      "AliquotaCOFINSSaida",
      ];
  }
}

ConfiguracaoNcm.knex(connections.plano);

export type TConfiguracaoNcm = ModelObject<ConfiguracaoNcm>;
