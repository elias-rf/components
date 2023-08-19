import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ArqDupHistorico extends ModelBase {
  static tableName = "ArqDupHistorico";
  static idColumn = [];

  CdFilial!: number;
  CdFornecedor!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  Sequencia!: number;
  Data!: Date;
  Usuario!: string;
  Historico!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdFornecedor",
      "NumDoc",
      "Serie",
      "Modelo",
      "Sequencia",
      "Data",
      "Usuario",
      "Historico",
      ];
  }
}

ArqDupHistorico.knex(connections.plano);

export type TArqDupHistorico = ModelObject<ArqDupHistorico>;
