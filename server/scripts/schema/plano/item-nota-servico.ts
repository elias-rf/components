import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemNotaServico extends ModelBase {
  static tableName = "ItemNotaServico";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  Quantidade!: number;
  VlUnitario!: number;
  FgIRRF!: string;
  FgIN381!: string;
  FgEstoqueServico!: string;
  CST!: number;
  VlServico!: number;
  VlLiquido!: number;
  VlDeducoes!: number;
  VlBaseCalculo!: number;
  VlBaseCalculoPIS!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCofins!: number;
  AliquotaCofins!: number;
  VlCofins!: number;
  VlBaseCalculoINSS!: number;
  AliquotaINSS!: number;
  VlINSS!: number;
  VlBaseCalculoIRRF!: number;
  AliquotaIRRF!: number;
  VlIRRF!: number;
  VlBaseCalculoCSLL!: number;
  AliquotaCSLL!: number;
  VlCSLL!: number;
  VlBaseCalculoIN381!: number;
  AliquotaIN381!: number;
  VlIN381!: number;
  FgISSRetido!: string;
  VlISSRetido!: number;
  VlBaseCalculoISS!: number;
  AliquotaISS!: number;
  VlISS!: number;
  VlOutrasRetencoes!: number;
  VlDescontoIncondicionado!: number;
  VlDescontoCondicionado!: number;
  CSTPIS!: number;
  CSTCofins!: number;
  VlAproximadoImpostoItem!: number;
  VlAproximadoImpostoFederal!: number;
  VlAproximadoImpostoEstadual!: number;
  VlAproximadoImpostoMunicipal!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "Quantidade",
      "VlUnitario",
      "FgIRRF",
      "FgIN381",
      "FgEstoqueServico",
      "CST",
      "VlServico",
      "VlLiquido",
      "VlDeducoes",
      "VlBaseCalculo",
      "VlBaseCalculoPIS",
      "AliquotaPIS",
      "VlPIS",
      "VlBaseCalculoCofins",
      "AliquotaCofins",
      "VlCofins",
      "VlBaseCalculoINSS",
      "AliquotaINSS",
      "VlINSS",
      "VlBaseCalculoIRRF",
      "AliquotaIRRF",
      "VlIRRF",
      "VlBaseCalculoCSLL",
      "AliquotaCSLL",
      "VlCSLL",
      "VlBaseCalculoIN381",
      "AliquotaIN381",
      "VlIN381",
      "FgISSRetido",
      "VlISSRetido",
      "VlBaseCalculoISS",
      "AliquotaISS",
      "VlISS",
      "VlOutrasRetencoes",
      "VlDescontoIncondicionado",
      "VlDescontoCondicionado",
      "CSTPIS",
      "CSTCofins",
      "VlAproximadoImpostoItem",
      "VlAproximadoImpostoFederal",
      "VlAproximadoImpostoEstadual",
      "VlAproximadoImpostoMunicipal",
      ];
  }
}

ItemNotaServico.knex(connections.plano);

export type TItemNotaServico = ModelObject<ItemNotaServico>;
