import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TEtiqueta extends ModelBase {
  static tableName = "tEtiqueta";
  static idColumn = ["controle"];

  controle!: string;
  qtdImpressao!: number;
  dataFabricacao!: Date;
  

  static getFields() {
    return [
      "controle",
      "qtdImpressao",
      "dataFabricacao",
      ];
  }
}

TEtiqueta.knex(connections.oftalmo);

export type TTEtiqueta = ModelObject<TEtiqueta>;
