import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreFornecedor extends ModelBase {
  static tableName = "MovCreFornecedor";
  static idColumn = [];

  CdFornecedor!: number;
  Sequencia!: number;
  NumDocumento!: number;
  Serie!: string;
  TipoMovimentacao!: string;
  DtLcto!: Date;
  Valor!: number;
  CdUsuario!: string;
  DtOcorrencia!: Date;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFornecedor",
      "Sequencia",
      "NumDocumento",
      "Serie",
      "TipoMovimentacao",
      "DtLcto",
      "Valor",
      "CdUsuario",
      "DtOcorrencia",
      "Modelo",
      ];
  }
}

MovCreFornecedor.knex(connections.plano);

export type TMovCreFornecedor = ModelObject<MovCreFornecedor>;
