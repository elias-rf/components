import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CustoMedio extends ModelBase {
  static tableName = "CustoMedio";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtRef!: Date;
  Sequencia!: number;
  QtdeAnterior!: number;
  VlCustoMedioAnterior!: number;
  NumDoc!: number;
  Serie!: string;
  CdFornecedor!: number;
  QtdeEntrada!: number;
  VlCustoEntrada!: number;
  QtdeSaldo!: number;
  VlCustoMedio!: number;
  Modelo!: string;
  TipoEmitente!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtRef",
      "Sequencia",
      "QtdeAnterior",
      "VlCustoMedioAnterior",
      "NumDoc",
      "Serie",
      "CdFornecedor",
      "QtdeEntrada",
      "VlCustoEntrada",
      "QtdeSaldo",
      "VlCustoMedio",
      "Modelo",
      "TipoEmitente",
      ];
  }
}

CustoMedio.knex(connections.plano);

export type TCustoMedio = ModelObject<CustoMedio>;
