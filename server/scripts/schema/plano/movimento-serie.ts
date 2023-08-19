import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovimentoSerie extends ModelBase {
  static tableName = "MovimentoSerie";
  static idColumn = [];

  CdEmitente!: number;
  CdFilial!: number;
  CdProduto!: string;
  DtMovimento!: Date;
  Finalidade!: string;
  HrMovimento!: Date;
  NumDoc!: number;
  NumSerieProduto!: string;
  Serie!: string;
  TipoEmitente!: string;
  TipoMovimento!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdEmitente",
      "CdFilial",
      "CdProduto",
      "DtMovimento",
      "Finalidade",
      "HrMovimento",
      "NumDoc",
      "NumSerieProduto",
      "Serie",
      "TipoEmitente",
      "TipoMovimento",
      "Modelo",
      ];
  }
}

MovimentoSerie.knex(connections.plano);

export type TMovimentoSerie = ModelObject<MovimentoSerie>;
