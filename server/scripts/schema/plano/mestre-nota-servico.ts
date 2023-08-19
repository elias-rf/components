import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaServico extends ModelBase {
  static tableName = "MestreNotaServico";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdCliente!: number;
  DtEmissao!: Date;
  NaturezaOperacao!: number;
  VlBaseCalculoISS!: number;
  AliquotaISS!: number;
  VlISS!: number;
  VlBaseCalculoPIS!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCofins!: number;
  AliquotaCofins!: number;
  VlCofins!: number;
  VlBaseCalculoINSS!: number;
  AliquotaINSS!: number;
  VlINSS!: number;
  VlBaseCalculoIR!: number;
  AliquotaIR!: number;
  VlIR!: number;
  VlBaseCalculoIN381!: number;
  AliquotaINS381!: number;
  VlIN381!: number;
  VlBaseCalculoCSLL!: number;
  AliquotaCSLL!: number;
  VlCSLL!: number;
  VlTotalServicos!: number;
  VlTotalLiquidoServicos!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdCliente",
      "DtEmissao",
      "NaturezaOperacao",
      "VlBaseCalculoISS",
      "AliquotaISS",
      "VlISS",
      "VlBaseCalculoPIS",
      "AliquotaPIS",
      "VlPIS",
      "VlBaseCalculoCofins",
      "AliquotaCofins",
      "VlCofins",
      "VlBaseCalculoINSS",
      "AliquotaINSS",
      "VlINSS",
      "VlBaseCalculoIR",
      "AliquotaIR",
      "VlIR",
      "VlBaseCalculoIN381",
      "AliquotaINS381",
      "VlIN381",
      "VlBaseCalculoCSLL",
      "AliquotaCSLL",
      "VlCSLL",
      "VlTotalServicos",
      "VlTotalLiquidoServicos",
      ];
  }
}

MestreNotaServico.knex(connections.plano);

export type TMestreNotaServico = ModelObject<MestreNotaServico>;
