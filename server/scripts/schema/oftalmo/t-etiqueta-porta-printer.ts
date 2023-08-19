import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TEtiquetaPortaPrinter extends ModelBase {
  static tableName = "tEtiquetaPortaPrinter";
  static idColumn = [];

  Port!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "Port",
      "Descricao",
      ];
  }
}

TEtiquetaPortaPrinter.knex(connections.oftalmo);

export type TTEtiquetaPortaPrinter = ModelObject<TEtiquetaPortaPrinter>;
