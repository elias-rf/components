import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoSat extends ModelBase {
  static tableName = "CancelamentoSAT";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  NumChave!: string;
  NumSessao!: string;
  DtCancelamento!: Date;
  NumDocumentoSAT!: number;
  CpfCnpjConsumidor!: string;
  VlTotalCupom!: number;
  AssinaturaQrCode!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "NumChave",
      "NumSessao",
      "DtCancelamento",
      "NumDocumentoSAT",
      "CpfCnpjConsumidor",
      "VlTotalCupom",
      "AssinaturaQrCode",
      ];
  }
}

CancelamentoSat.knex(connections.plano);

export type TCancelamentoSat = ModelObject<CancelamentoSat>;
