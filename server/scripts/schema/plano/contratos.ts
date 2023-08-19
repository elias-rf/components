import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Contratos extends ModelBase {
  static tableName = "Contratos";
  static idColumn = [];

  CodCli!: number;
  DiaContr!: number;
  Descricao!: string;
  Valor!: number;
  Aliquota!: number;
  PrzVencto!: number;
  Periodo!: number;
  DtUltimaPrev!: Date;
  DtProximaPrev!: Date;
  FgEmissao!: string;
  SequenciaEmissao!: number;
  DtEmisUltNota!: Date;
  DtInclusao!: Date;
  DtProxReajuste!: Date;
  DtUltReajuste!: Date;
  CdProdutoAssociado!: string;
  VlInicial!: number;
  QtdeHorasBanco!: number;
  VlHoraAvulsa!: number;
  TempoDeslocamento!: number;
  DiaVcto!: number;
  SerieNF!: string;
  CdTipoContrato!: number;
  DtUltContagem!: Date;
  Modelo!: string;
  QtdeHorasContrato!: number;
  DtInicioFaturamento!: Date;
  

  static getFields() {
    return [
      "CodCli",
      "DiaContr",
      "Descricao",
      "Valor",
      "Aliquota",
      "PrzVencto",
      "Periodo",
      "DtUltimaPrev",
      "DtProximaPrev",
      "FgEmissao",
      "SequenciaEmissao",
      "DtEmisUltNota",
      "DtInclusao",
      "DtProxReajuste",
      "DtUltReajuste",
      "CdProdutoAssociado",
      "VlInicial",
      "QtdeHorasBanco",
      "VlHoraAvulsa",
      "TempoDeslocamento",
      "DiaVcto",
      "SerieNF",
      "CdTipoContrato",
      "DtUltContagem",
      "Modelo",
      "QtdeHorasContrato",
      "DtInicioFaturamento",
      ];
  }
}

Contratos.knex(connections.plano);

export type TContratos = ModelObject<Contratos>;
