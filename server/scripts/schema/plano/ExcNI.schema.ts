import { TTableDef } from "@mono/types/model";

export const ExcNI: TTableDef = {
  database: "plano",
  table: "ExcNI",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NroNF",
      label: "NroNF",
      name: "NroNF",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "PrecUnit",
      label: "PrecUnit",
      name: "PrecUnit",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMS",
      label: "PercICMS",
      name: "PercICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlrICMS",
      label: "VlrICMS",
      name: "VlrICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercIPI",
      label: "PercIPI",
      name: "PercIPI",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlrIPI",
      label: "VlrIPI",
      name: "VlrIPI",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecVarejo",
      label: "PrecVarejo",
      name: "PrecVarejo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecPraticado",
      label: "PrecPraticado",
      name: "PrecPraticado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PrecDiferenca",
      label: "PrecDiferenca",
      name: "PrecDiferenca",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeVendida",
      label: "QtdeVendida",
      name: "QtdeVendida",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRecuperar",
      label: "ICMSRecuperar",
      name: "ICMSRecuperar",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRetido",
      label: "ICMSRetido",
      name: "ICMSRetido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgCusto",
      label: "FgCusto",
      name: "FgCusto",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEtiqueta",
      label: "FgEtiqueta",
      name: "FgEtiqueta",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "PrecUnitBruto",
      label: "PrecUnitBruto",
      name: "PrecUnitBruto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescItem",
      label: "VlDescItem",
      name: "VlDescItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcrescItem",
      label: "VlAcrescItem",
      name: "VlAcrescItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotItem",
      label: "VlTotItem",
      name: "VlTotItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgItemSubst",
      label: "FgItemSubst",
      name: "FgItemSubst",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "VlMargemSubstituicao",
      label: "VlMargemSubstituicao",
      name: "VlMargemSubstituicao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "TotSubstItem",
      label: "TotSubstItem",
      name: "TotSubstItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "VlBaseSub",
      label: "VlBaseSub",
      name: "VlBaseSub",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSub",
      label: "VlICMSSub",
      name: "VlICMSSub",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
