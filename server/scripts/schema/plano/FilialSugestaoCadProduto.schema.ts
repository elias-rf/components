import { TTableDef } from "@/types/model";

export const FilialSugestaoCadProduto: TTableDef = {
  database: "plano",
  table: "FilialSugestaoCadProduto",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoTributacaoICMS",
      label: "TipoTributacaoICMS",
      name: "TipoTributacaoICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercReducaoICMSST",
      label: "PercReducaoICMSST",
      name: "PercReducaoICMSST",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgReducaoICMSContribuinte",
      label: "FgReducaoICMSContribuinte",
      name: "FgReducaoICMSContribuinte",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgReducaoICMSNaoContribuinte",
      label: "FgReducaoICMSNaoContribuinte",
      name: "FgReducaoICMSNaoContribuinte",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeDeducaoICMS",
      label: "FgCompoeDeducaoICMS",
      name: "FgCompoeDeducaoICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIsentoICMSECF",
      label: "FgIsentoICMSECF",
      name: "FgIsentoICMSECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIsentoSubstituido030",
      label: "FgIsentoSubstituido030",
      name: "FgIsentoSubstituido030",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModDeterminacaoBCICMS",
      label: "ModDeterminacaoBCICMS",
      name: "ModDeterminacaoBCICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModDeterminacaoBCICMSSub",
      label: "ModDeterminacaoBCICMSSub",
      name: "ModDeterminacaoBCICMSSub",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTIPIEntrada",
      label: "CSTIPIEntrada",
      name: "CSTIPIEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaIPIEntrada",
      label: "AliquotaIPIEntrada",
      name: "AliquotaIPIEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTIPISaida",
      label: "CSTIPISaida",
      name: "CSTIPISaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaIPISaida",
      label: "AliquotaIPISaida",
      name: "AliquotaIPISaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ClasseEnquadramentoIPI",
      label: "ClasseEnquadramentoIPI",
      name: "ClasseEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdSeloIPI",
      label: "CdSeloIPI",
      name: "CdSeloIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTPISEntrada",
      label: "CSTPISEntrada",
      name: "CSTPISEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaPISEntrada",
      label: "AliquotaPISEntrada",
      name: "AliquotaPISEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTPISSaida",
      label: "CSTPISSaida",
      name: "CSTPISSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaPISSaida",
      label: "AliquotaPISSaida",
      name: "AliquotaPISSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTCOFINSEntrada",
      label: "CSTCOFINSEntrada",
      name: "CSTCOFINSEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaCOFINSEntrada",
      label: "AliquotaCOFINSEntrada",
      name: "AliquotaCOFINSEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTCOFINSSaida",
      label: "CSTCOFINSSaida",
      name: "CSTCOFINSSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaCOFINSSaida",
      label: "AliquotaCOFINSSaida",
      name: "AliquotaCOFINSSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeBaseISS",
      label: "FgCompoeBaseISS",
      name: "FgCompoeBaseISS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaISS",
      label: "AliquotaISS",
      name: "AliquotaISS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdServico",
      label: "CdServico",
      name: "CdServico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeBlocoK",
      label: "FgCompoeBlocoK",
      name: "FgCompoeBlocoK",
      typeField: "string",
    },
  ],
};
