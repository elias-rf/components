import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadEst extends ModelBase {
  static tableName = "CadEst";
  static idColumn = ["Uf"];

  Uf!: string;
  NmEstado!: string;
  DescontoSub!: number;
  MargemSub!: number;
  BaseCalculo!: string;
  BaseReducao!: number;
  MargemSubPositivo!: number;
  BaseReducaoPositivo!: number;
  MargemSubNegativo!: number;
  BaseReducaoNegativo!: number;
  PercSubstituicaoTributaria!: number;
  AliqSubstituicao!: number;
  CdIBGE!: number;
  PercCombatePobreza!: number;
  

  static getFields() {
    return [
      "Uf",
      "NmEstado",
      "DescontoSub",
      "MargemSub",
      "BaseCalculo",
      "BaseReducao",
      "MargemSubPositivo",
      "BaseReducaoPositivo",
      "MargemSubNegativo",
      "BaseReducaoNegativo",
      "PercSubstituicaoTributaria",
      "AliqSubstituicao",
      "CdIBGE",
      "PercCombatePobreza",
      ];
  }
}

CadEst.knex(connections.plano);

export type TCadEst = ModelObject<CadEst>;
