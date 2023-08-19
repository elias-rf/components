import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Sugestao extends ModelBase {
  static tableName = "Sugestao";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  CdEmitente!: number;
  CdVendedor!: number;
  DtEntrega!: Date;
  LocalEntrega!: string;
  NmFavorecido!: string;
  Obs!: string;
  Posicao!: string;
  Proximidades!: string;
  VlPago!: number;
  Tipo!: string;
  DtEmissao!: Date;
  Horario!: Date;
  VlTotal!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "CdEmitente",
      "CdVendedor",
      "DtEntrega",
      "LocalEntrega",
      "NmFavorecido",
      "Obs",
      "Posicao",
      "Proximidades",
      "VlPago",
      "Tipo",
      "DtEmissao",
      "Horario",
      "VlTotal",
      "FgSituacao",
      ];
  }
}

Sugestao.knex(connections.plano);

export type TSugestao = ModelObject<Sugestao>;
