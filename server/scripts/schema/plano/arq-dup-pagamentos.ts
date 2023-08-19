import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ArqDupPagamentos extends ModelBase {
  static tableName = "ArqDupPagamentos";
  static idColumn = [];

  CdFilial!: number;
  CdFornecedor!: number;
  Numdoc!: number;
  Serie!: string;
  Modelo!: string;
  SeqDoc!: number;
  DtPagamento!: Date;
  SequenciaPgto!: number;
  VlAmortizado!: number;
  VlJuros!: number;
  VlDesconto!: number;
  TipoPgto!: string;
  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumCheque!: number;
  NumLcto!: number;
  CdUsuario!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdFornecedor",
      "Numdoc",
      "Serie",
      "Modelo",
      "SeqDoc",
      "DtPagamento",
      "SequenciaPgto",
      "VlAmortizado",
      "VlJuros",
      "VlDesconto",
      "TipoPgto",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumCheque",
      "NumLcto",
      "CdUsuario",
      "DtUltAlteracao",
      "Observacao",
      ];
  }
}

ArqDupPagamentos.knex(connections.plano);

export type TArqDupPagamentos = ModelObject<ArqDupPagamentos>;
