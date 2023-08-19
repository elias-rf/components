import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle09 extends ModelBase {
  static tableName = "Controle09";
  static idColumn = [];

  NumSerie!: string;
  DtBase!: Date;
  NumCOO!: number;
  Serie!: string;
  TipoPagamento!: string;
  TipoDoc!: string;
  NumGNF!: number;
  NumCCF!: number;
  VlTotal!: number;
  VlPagamento!: number;
  FgEstorno!: string;
  VlEstorno!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "NumSerie",
      "DtBase",
      "NumCOO",
      "Serie",
      "TipoPagamento",
      "TipoDoc",
      "NumGNF",
      "NumCCF",
      "VlTotal",
      "VlPagamento",
      "FgEstorno",
      "VlEstorno",
      "DtUltAlteracao",
      ];
  }
}

Controle09.knex(connections.plano);

export type TControle09 = ModelObject<Controle09>;
