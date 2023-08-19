import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaImportacao extends ModelBase {
  static tableName = "MestreNotaImportacao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  VlCustosDiversos!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "VlCustosDiversos",
      ];
  }
}

MestreNotaImportacao.knex(connections.plano);

export type TMestreNotaImportacao = ModelObject<MestreNotaImportacao>;
