import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class UnidadeMedida extends ModelBase {
  static tableName = "UnidadeMedida";
  static idColumn = ["Unidade"];

  Unidade!: string;
  DescricaoUnidade!: string;
  

  static getFields() {
    return [
      "Unidade",
      "DescricaoUnidade",
      ];
  }
}

UnidadeMedida.knex(connections.plano);

export type TUnidadeMedida = ModelObject<UnidadeMedida>;
