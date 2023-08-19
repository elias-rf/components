import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemLancServicos extends ModelBase {
  static tableName = "ItemLancServicos";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  SubSerie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  CdServico!: string;
  Sequencia!: number;
  Quantidade!: number;
  CdClasse!: number;
  Unidade!: string;
  NopItem!: number;
  VlUnitario!: number;
  VlDescItem!: number;
  VlLiquidoUnit!: number;
  Origem!: number;
  CdCSTICMS!: number;
  CdCSTPIS!: number;
  CdCSTCOFINS!: number;
  PisBasCalc!: number;
  CofinsBasCalc!: number;
  AliquotaPIS!: number;
  AliquotaCOFINS!: number;
  VlBaseICMSItem!: number;
  AliquotaICMS!: number;
  VlIcmsItem!: number;
  VlBaseIcmsUF!: number;
  VlIcmsUF!: number;
  VlBaseIcmsItemST!: number;
  AliquotaST!: number;
  VlICMSSTItem!: number;
  VlPIS!: number;
  VlCofins!: number;
  Classif!: string;
  TipoTributacao!: string;
  PlanoContaSped!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "SubSerie",
      "Modelo",
      "CdFornecedor",
      "CdServico",
      "Sequencia",
      "Quantidade",
      "CdClasse",
      "Unidade",
      "NopItem",
      "VlUnitario",
      "VlDescItem",
      "VlLiquidoUnit",
      "Origem",
      "CdCSTICMS",
      "CdCSTPIS",
      "CdCSTCOFINS",
      "PisBasCalc",
      "CofinsBasCalc",
      "AliquotaPIS",
      "AliquotaCOFINS",
      "VlBaseICMSItem",
      "AliquotaICMS",
      "VlIcmsItem",
      "VlBaseIcmsUF",
      "VlIcmsUF",
      "VlBaseIcmsItemST",
      "AliquotaST",
      "VlICMSSTItem",
      "VlPIS",
      "VlCofins",
      "Classif",
      "TipoTributacao",
      "PlanoContaSped",
      ];
  }
}

ItemLancServicos.knex(connections.plano);

export type TItemLancServicos = ModelObject<ItemLancServicos>;
