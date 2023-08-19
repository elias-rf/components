import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedNopNsilva extends ModelBase {
  static tableName = "SpedNopNSILVA";
  static idColumn = ["Nop"];

  Nop!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "Nop",
      "Descricao",
      ];
  }
}

SpedNopNsilva.knex(connections.plano);

export type TSpedNopNsilva = ModelObject<SpedNopNsilva>;
