import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreCliente extends ModelBase {
  static tableName = "MovCreCliente";
  static idColumn = [];

  CdCliente!: number;
  Sequencia!: number;
  NumDocumento!: number;
  Serie!: string;
  TipoMovimentacao!: string;
  Dtlcto!: Date;
  Valor!: number;
  CdUsuario!: string;
  NumMapa!: number;
  DtOcorrencia!: Date;
  Modelo!: string;
  TipoDocumento!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "Sequencia",
      "NumDocumento",
      "Serie",
      "TipoMovimentacao",
      "Dtlcto",
      "Valor",
      "CdUsuario",
      "NumMapa",
      "DtOcorrencia",
      "Modelo",
      "TipoDocumento",
      ];
  }
}

MovCreCliente.knex(connections.plano);

export type TMovCreCliente = ModelObject<MovCreCliente>;
