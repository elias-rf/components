import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemNotaImportacao extends ModelBase {
  static tableName = "ItemNotaImportacao";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  NumDocImportacao!: string;
  DtDocImportacao!: Date;
  DtDesembaraco!: Date;
  CdExportador!: string;
  CdFabricante!: string;
  LocalDesembaraco!: string;
  UFDesembaraco!: string;
  NumAdicao!: string;
  SeqAdicao!: string;
  VlDesconto!: number;
  VlBaseCalculoICMS!: number;
  VlICMS!: number;
  VlBaseCalculoII!: number;
  VlII!: number;
  VlIOF!: number;
  VlBaseCalculoIPI!: number;
  VlIPI!: number;
  VlDespesaAduaneira!: number;
  VlBaseCalculoPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCOFINS!: number;
  VlCOFINS!: number;
  VlCustosDiversosItem!: number;
  ViaTransporte!: number;
  VlAFRMM!: number;
  TipoIntermedio!: number;
  CNPJAdquirente!: number;
  UFCNPJAdquirente!: string;
  NumDrawback!: string;
  ChaveNFeImportacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "NumDocImportacao",
      "DtDocImportacao",
      "DtDesembaraco",
      "CdExportador",
      "CdFabricante",
      "LocalDesembaraco",
      "UFDesembaraco",
      "NumAdicao",
      "SeqAdicao",
      "VlDesconto",
      "VlBaseCalculoICMS",
      "VlICMS",
      "VlBaseCalculoII",
      "VlII",
      "VlIOF",
      "VlBaseCalculoIPI",
      "VlIPI",
      "VlDespesaAduaneira",
      "VlBaseCalculoPIS",
      "VlPIS",
      "VlBaseCalculoCOFINS",
      "VlCOFINS",
      "VlCustosDiversosItem",
      "ViaTransporte",
      "VlAFRMM",
      "TipoIntermedio",
      "CNPJAdquirente",
      "UFCNPJAdquirente",
      "NumDrawback",
      "ChaveNFeImportacao",
      ];
  }
}

ItemNotaImportacao.knex(connections.plano);

export type TItemNotaImportacao = ModelObject<ItemNotaImportacao>;
