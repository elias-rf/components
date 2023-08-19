import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CustoTempJulia extends ModelBase {
  static tableName = "CustoTempJULIA";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  Data!: Date;
  Ordem!: number;
  Sequencia!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SeqProduto!: number;
  CdEmitente!: number;
  RzSocial!: string;
  Operacao!: string;
  Quantidade!: number;
  Valor!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "Data",
      "Ordem",
      "Sequencia",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SeqProduto",
      "CdEmitente",
      "RzSocial",
      "Operacao",
      "Quantidade",
      "Valor",
      ];
  }
}

CustoTempJulia.knex(connections.plano);

export type TCustoTempJulia = ModelObject<CustoTempJulia>;
