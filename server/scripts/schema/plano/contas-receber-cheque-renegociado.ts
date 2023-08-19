import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContasReceberChequeRenegociado extends ModelBase {
  static tableName = "ContasReceberChequeRenegociado";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDocumento!: string;
  ItemDocumento!: number;
  NmPortador!: string;
  DtInclusao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDocumento",
      "ItemDocumento",
      "NmPortador",
      "DtInclusao",
      ];
  }
}

ContasReceberChequeRenegociado.knex(connections.plano);

export type TContasReceberChequeRenegociado = ModelObject<ContasReceberChequeRenegociado>;
