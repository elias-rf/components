import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RetornoSat extends ModelBase {
  static tableName = "RetornoSAT";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  NumChave!: string;
  DtEmissao!: Date;
  VlTotalCfe!: number;
  CpfCnpj!: string;
  AssinaturaQrCode!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "NumChave",
      "DtEmissao",
      "VlTotalCfe",
      "CpfCnpj",
      "AssinaturaQrCode",
      ];
  }
}

RetornoSat.knex(connections.plano);

export type TRetornoSat = ModelObject<RetornoSat>;
