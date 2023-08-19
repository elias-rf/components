import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PharmaLinkPedido extends ModelBase {
  static tableName = "PharmaLinkPedido";
  static idColumn = ["NumAutorizacao"];

  NumAutorizacao!: number;
  CdFilial!: number;
  Operadora!: string;
  CdProjeto!: string;
  Modalidade!: string;
  DtRetorno!: Date;
  CdStatus!: number;
  NmPaciente!: string;
  CdTerminal!: string;
  NumeroCartao!: string;
  NumPedido!: number;
  ExigeCRM!: string;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  NumPDV!: number;
  NumCOO!: number;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "CdFilial",
      "Operadora",
      "CdProjeto",
      "Modalidade",
      "DtRetorno",
      "CdStatus",
      "NmPaciente",
      "CdTerminal",
      "NumeroCartao",
      "NumPedido",
      "ExigeCRM",
      "NumDoc",
      "Serie",
      "Modelo",
      "NumPDV",
      "NumCOO",
      ];
  }
}

PharmaLinkPedido.knex(connections.plano);

export type TPharmaLinkPedido = ModelObject<PharmaLinkPedido>;
