import { TEntity } from "@er/types/*";

export const ExcNI: TEntity =
  {
  "database": "plano",
  "table": "ExcNI",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NroNF",
      "label": "NroNF",
      "name": "NroNF",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PrecUnit",
      "label": "PrecUnit",
      "name": "PrecUnit",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercICMS",
      "label": "PercICMS",
      "name": "PercICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlrICMS",
      "label": "VlrICMS",
      "name": "VlrICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercIPI",
      "label": "PercIPI",
      "name": "PercIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlrIPI",
      "label": "VlrIPI",
      "name": "VlrIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecVarejo",
      "label": "PrecVarejo",
      "name": "PrecVarejo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecPraticado",
      "label": "PrecPraticado",
      "name": "PrecPraticado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PrecDiferenca",
      "label": "PrecDiferenca",
      "name": "PrecDiferenca",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeVendida",
      "label": "QtdeVendida",
      "name": "QtdeVendida",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSRecuperar",
      "label": "ICMSRecuperar",
      "name": "ICMSRecuperar",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSRetido",
      "label": "ICMSRetido",
      "name": "ICMSRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgCusto",
      "label": "FgCusto",
      "name": "FgCusto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEtiqueta",
      "label": "FgEtiqueta",
      "name": "FgEtiqueta",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PrecUnitBruto",
      "label": "PrecUnitBruto",
      "name": "PrecUnitBruto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescItem",
      "label": "VlDescItem",
      "name": "VlDescItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAcrescItem",
      "label": "VlAcrescItem",
      "name": "VlAcrescItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotItem",
      "label": "VlTotItem",
      "name": "VlTotItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgItemSubst",
      "label": "FgItemSubst",
      "name": "FgItemSubst",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlMargemSubstituicao",
      "label": "VlMargemSubstituicao",
      "name": "VlMargemSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TotSubstItem",
      "label": "TotSubstItem",
      "name": "TotSubstItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CustoMedio",
      "label": "CustoMedio",
      "name": "CustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoTributacao",
      "label": "TipoTributacao",
      "name": "TipoTributacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlBaseSub",
      "label": "VlBaseSub",
      "name": "VlBaseSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSSub",
      "label": "VlICMSSub",
      "name": "VlICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSBasCalc",
      "label": "ICMSBasCalc",
      "name": "ICMSBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
