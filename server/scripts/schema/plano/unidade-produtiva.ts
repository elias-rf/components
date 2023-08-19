import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class UnidadeProdutiva extends ModelBase {
  static tableName = "UnidadeProdutiva";
  static idColumn = ["Identificacao"];

  Identificacao!: string;
  CustoLaboratorio!: number;
  CustoTelemarketing!: number;
  CustoBalcao!: number;
  CustoControleQualidade!: number;
  CustoExpedicao!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "Identificacao",
      "CustoLaboratorio",
      "CustoTelemarketing",
      "CustoBalcao",
      "CustoControleQualidade",
      "CustoExpedicao",
      "DtUltAlteracao",
      ];
  }
}

UnidadeProdutiva.knex(connections.plano);

export type TUnidadeProdutiva = ModelObject<UnidadeProdutiva>;
