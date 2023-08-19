import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcNi extends ModelBase {
  static tableName = "ExcNI";
  static idColumn = [];

  CdEmpresa!: number;
  NroNF!: number;
  Serie!: string;
  CdFornecedor!: number;
  CdProduto!: string;
  Quantidade!: number;
  TipoMovimentacao!: string;
  PrecUnit!: number;
  PercICMS!: number;
  VlrICMS!: number;
  PercIPI!: number;
  VlrIPI!: number;
  PrecVarejo!: number;
  PrecPraticado!: number;
  PrecDiferenca!: number;
  QtdeVendida!: number;
  ICMSRecuperar!: number;
  ICMSRetido!: number;
  FgCusto!: string;
  FgEtiqueta!: string;
  PrecUnitBruto!: number;
  VlDescItem!: number;
  VlAcrescItem!: number;
  VlTotItem!: number;
  FgItemSubst!: string;
  VlMargemSubstituicao!: number;
  TotSubstItem!: number;
  CustoMedio!: number;
  TipoTributacao!: string;
  VlBaseSub!: number;
  VlICMSSub!: number;
  ICMSBasCalc!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "NroNF",
      "Serie",
      "CdFornecedor",
      "CdProduto",
      "Quantidade",
      "TipoMovimentacao",
      "PrecUnit",
      "PercICMS",
      "VlrICMS",
      "PercIPI",
      "VlrIPI",
      "PrecVarejo",
      "PrecPraticado",
      "PrecDiferenca",
      "QtdeVendida",
      "ICMSRecuperar",
      "ICMSRetido",
      "FgCusto",
      "FgEtiqueta",
      "PrecUnitBruto",
      "VlDescItem",
      "VlAcrescItem",
      "VlTotItem",
      "FgItemSubst",
      "VlMargemSubstituicao",
      "TotSubstItem",
      "CustoMedio",
      "TipoTributacao",
      "VlBaseSub",
      "VlICMSSub",
      "ICMSBasCalc",
      "Modelo",
      ];
  }
}

ExcNi.knex(connections.plano);

export type TExcNi = ModelObject<ExcNi>;
