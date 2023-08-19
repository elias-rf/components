import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfeSeArquivos extends ModelBase {
  static tableName = "NfeSeArquivos";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Tipo!: string;
  Sequencia!: number;
  Texto!: string;
  DtGeracao!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Tipo",
      "Sequencia",
      "Texto",
      "DtGeracao",
      "Usuario",
      ];
  }
}

NfeSeArquivos.knex(connections.plano);

export type TNfeSeArquivos = ModelObject<NfeSeArquivos>;
