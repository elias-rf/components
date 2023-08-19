import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemLancTransporte extends ModelBase {
  static tableName = "ItemLancTransporte";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  CdServico!: string;
  NopItem!: number;
  VlUnitario!: number;
  VlDescItem!: number;
  VlLiquidoUnit!: number;
  Origem!: number;
  CdCSTICMS!: number;
  CdCSTPIS!: number;
  CdCSTCOFINS!: number;
  ICMSBasCalc!: number;
  AliquotaICMS!: number;
  VlIcms!: number;
  PISBasCalc!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  CofinsBasCalc!: number;
  AliquotaCofins!: number;
  VlCofins!: number;
  Classif!: string;
  TipoTributacao!: string;
  PlanoContaSped!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "CdServico",
      "NopItem",
      "VlUnitario",
      "VlDescItem",
      "VlLiquidoUnit",
      "Origem",
      "CdCSTICMS",
      "CdCSTPIS",
      "CdCSTCOFINS",
      "ICMSBasCalc",
      "AliquotaICMS",
      "VlIcms",
      "PISBasCalc",
      "AliquotaPIS",
      "VlPIS",
      "CofinsBasCalc",
      "AliquotaCofins",
      "VlCofins",
      "Classif",
      "TipoTributacao",
      "PlanoContaSped",
      ];
  }
}

ItemLancTransporte.knex(connections.plano);

export type TItemLancTransporte = ModelObject<ItemLancTransporte>;
