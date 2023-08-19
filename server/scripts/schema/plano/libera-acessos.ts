import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LiberaAcessos extends ModelBase {
  static tableName = "LiberaAcessos";
  static idColumn = ["CgcCpf"];

  CgcCpf!: string;
  DHLibEmergencia!: string;
  

  static getFields() {
    return [
      "CgcCpf",
      "DHLibEmergencia",
      ];
  }
}

LiberaAcessos.knex(connections.plano);

export type TLiberaAcessos = ModelObject<LiberaAcessos>;
