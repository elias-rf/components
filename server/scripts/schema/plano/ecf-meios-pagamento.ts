import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfMeiosPagamento extends ModelBase {
  static tableName = "ECFMeiosPagamento";
  static idColumn = [];

  NumSerie!: string;
  DtBase!: Date;
  NumCOO!: number;
  TipoPagamento!: string;
  NumGNF!: number;
  NumCCF!: number;
  VlTotal!: number;
  VlPagamento!: number;
  FgEstorno!: string;
  VlEstorno!: number;
  DtUltAlteracao!: Date;
  Serie!: string;
  TipoDoc!: string;
  ControleSerie!: string;
  ControleCOO!: number;
  ControleSerieDoc!: string;
  ControleTipo!: string;
  

  static getFields() {
    return [
      "NumSerie",
      "DtBase",
      "NumCOO",
      "TipoPagamento",
      "NumGNF",
      "NumCCF",
      "VlTotal",
      "VlPagamento",
      "FgEstorno",
      "VlEstorno",
      "DtUltAlteracao",
      "Serie",
      "TipoDoc",
      "ControleSerie",
      "ControleCOO",
      "ControleSerieDoc",
      "ControleTipo",
      ];
  }
}

EcfMeiosPagamento.knex(connections.plano);

export type TEcfMeiosPagamento = ModelObject<EcfMeiosPagamento>;
