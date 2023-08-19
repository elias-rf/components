import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCoBrSerasaItem extends ModelBase {
  static tableName = "TitCoBrSerasaItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDocumento!: string;
  ItemDocumento!: number;
  DtEmissao!: Date;
  DtVcto!: Date;
  DtPagto!: Date;
  DtUltAlteracao!: Date;
  VlTitulo!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDocumento",
      "ItemDocumento",
      "DtEmissao",
      "DtVcto",
      "DtPagto",
      "DtUltAlteracao",
      "VlTitulo",
      ];
  }
}

TitCoBrSerasaItem.knex(connections.plano);

export type TTitCoBrSerasaItem = ModelObject<TitCoBrSerasaItem>;
