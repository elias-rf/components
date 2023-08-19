import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliOcorrencias extends ModelBase {
  static tableName = "CadCliOcorrencias";
  static idColumn = [];

  CdCliente!: number;
  Data!: Date;
  Horario!: Date;
  Ocorrencia!: string;
  CdUsuario!: string;
  TpOcorrencia!: string;
  FgExibePreVenda!: string;
  NumPedido!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "Data",
      "Horario",
      "Ocorrencia",
      "CdUsuario",
      "TpOcorrencia",
      "FgExibePreVenda",
      "NumPedido",
      ];
  }
}

CadCliOcorrencias.knex(connections.plano);

export type TCadCliOcorrencias = ModelObject<CadCliOcorrencias>;
