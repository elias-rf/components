import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Picture extends ModelBase {
  static tableName = "Picture";
  static idColumn = ["Numero"];

  Numero!: number;
  Picture!: string;
  Tempo!: number;
  

  static getFields() {
    return [
      "Numero",
      "Picture",
      "Tempo",
      ];
  }
}

Picture.knex(connections.plano);

export type TPicture = ModelObject<Picture>;
