import { TTableDef } from "@/types/model";

export const ExcNI: TTableDef = {
  database: "plano",
  table: "ExcNI",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroNF",
      label: "NroNF",
      name: "NroNF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PrecUnit",
      label: "PrecUnit",
      name: "PrecUnit",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMS",
      label: "PercICMS",
      name: "PercICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlrICMS",
      label: "VlrICMS",
      name: "VlrICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercIPI",
      label: "PercIPI",
      name: "PercIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlrIPI",
      label: "VlrIPI",
      name: "VlrIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecVarejo",
      label: "PrecVarejo",
      name: "PrecVarejo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecPraticado",
      label: "PrecPraticado",
      name: "PrecPraticado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecDiferenca",
      label: "PrecDiferenca",
      name: "PrecDiferenca",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeVendida",
      label: "QtdeVendida",
      name: "QtdeVendida",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRecuperar",
      label: "ICMSRecuperar",
      name: "ICMSRecuperar",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRetido",
      label: "ICMSRetido",
      name: "ICMSRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgCusto",
      label: "FgCusto",
      name: "FgCusto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEtiqueta",
      label: "FgEtiqueta",
      name: "FgEtiqueta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PrecUnitBruto",
      label: "PrecUnitBruto",
      name: "PrecUnitBruto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescItem",
      label: "VlDescItem",
      name: "VlDescItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcrescItem",
      label: "VlAcrescItem",
      name: "VlAcrescItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotItem",
      label: "VlTotItem",
      name: "VlTotItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgItemSubst",
      label: "FgItemSubst",
      name: "FgItemSubst",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlMargemSubstituicao",
      label: "VlMargemSubstituicao",
      name: "VlMargemSubstituicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TotSubstItem",
      label: "TotSubstItem",
      name: "TotSubstItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlBaseSub",
      label: "VlBaseSub",
      name: "VlBaseSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSub",
      label: "VlICMSSub",
      name: "VlICMSSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
