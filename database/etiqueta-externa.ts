import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class EtiquetaExterna extends ModelBase {
  static tableName = "tEtiqueta";
  static idColumn = "controle";

  controle!: string;
  qtdImpressao!: number;
  dataFabricacao!: Date;

  static getFields() {
    return ["controle", "qtdImpressao", "dataFabricacao"];
  }
}

EtiquetaExterna.knex(connections.oftalmo);

export type TEtiquetaExterna = ModelObject<EtiquetaExterna>;
