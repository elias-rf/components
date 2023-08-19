import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialLogoMarca extends ModelBase {
  static tableName = "FilialLogoMarca";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  Imagem!: any;
  

  static getFields() {
    return [
      "CdFilial",
      "Imagem",
      ];
  }
}

FilialLogoMarca.knex(connections.plano);

export type TFilialLogoMarca = ModelObject<FilialLogoMarca>;
