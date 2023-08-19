import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TempDanfe extends ModelBase {
  static tableName = "TempDanfe";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  SequenciaNota!: number;
  Sequencia!: number;
  CdProduto!: string;
  Descricao!: string;
  NCM!: number;
  CST!: string;
  CFOP!: number;
  Unidade!: string;
  Quantidade!: number;
  VlUnitario!: number;
  VlTotalItem!: number;
  VlBaseCalculoICMS!: number;
  AliquotaICMS!: number;
  VlICMS!: number;
  AliquotaIPI!: number;
  VlIPI!: number;
  VlAproximadoImpostoItem!: number;
  VlBrutoItem!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "SequenciaNota",
      "Sequencia",
      "CdProduto",
      "Descricao",
      "NCM",
      "CST",
      "CFOP",
      "Unidade",
      "Quantidade",
      "VlUnitario",
      "VlTotalItem",
      "VlBaseCalculoICMS",
      "AliquotaICMS",
      "VlICMS",
      "AliquotaIPI",
      "VlIPI",
      "VlAproximadoImpostoItem",
      "VlBrutoItem",
      ];
  }
}

TempDanfe.knex(connections.plano);

export type TTempDanfe = ModelObject<TempDanfe>;
