import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle13 extends ModelBase {
  static tableName = "Controle13";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  DtEmissao!: Date;
  VlTotal!: number;
  VlDesconto!: number;
  CdCliente!: number;
  IndicadorCancelamento!: string;
  NomeAdquirente!: string;
  CPFCNPJAdquirente!: number;
  Chave!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "DtEmissao",
      "VlTotal",
      "VlDesconto",
      "CdCliente",
      "IndicadorCancelamento",
      "NomeAdquirente",
      "CPFCNPJAdquirente",
      "Chave",
      ];
  }
}

Controle13.knex(connections.plano);

export type TControle13 = ModelObject<Controle13>;
