import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcNm extends ModelBase {
  static tableName = "ExcNM";
  static idColumn = [];

  CdEmpresa!: number;
  NroNf!: number;
  Serie!: string;
  CdFornecedor!: number;
  Nop!: number;
  DtEmi!: Date;
  DtEntr!: Date;
  TotNf!: number;
  BaseSubstituicao!: number;
  IPIBasCalc!: number;
  IPIVlr!: number;
  IPIFrete!: number;
  ICMSAliq!: number;
  ICMSBasCalc!: number;
  ICMSVlr!: number;
  ICMSRetido!: number;
  ICMSOperPropria!: number;
  ICMSFrete!: number;
  Frete!: number;
  Seguro!: number;
  DtValidacao!: Date;
  VlMercadorias!: number;
  ConPag!: string;
  Tipo!: string;
  FgIPICompoeBase!: string;
  Horario!: Date;
  VlNfComplementar!: number;
  FgIPICompoeBaseSub!: string;
  FgEstoque!: string;
  IdParametro!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "NroNf",
      "Serie",
      "CdFornecedor",
      "Nop",
      "DtEmi",
      "DtEntr",
      "TotNf",
      "BaseSubstituicao",
      "IPIBasCalc",
      "IPIVlr",
      "IPIFrete",
      "ICMSAliq",
      "ICMSBasCalc",
      "ICMSVlr",
      "ICMSRetido",
      "ICMSOperPropria",
      "ICMSFrete",
      "Frete",
      "Seguro",
      "DtValidacao",
      "VlMercadorias",
      "ConPag",
      "Tipo",
      "FgIPICompoeBase",
      "Horario",
      "VlNfComplementar",
      "FgIPICompoeBaseSub",
      "FgEstoque",
      "IdParametro",
      "Modelo",
      ];
  }
}

ExcNm.knex(connections.plano);

export type TExcNm = ModelObject<ExcNm>;
