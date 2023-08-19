import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TSistemaMesVt extends ModelBase {
  static tableName = "tSistemaMesVT";
  static idColumn = ["Dia"];

  Dia!: Date;
  MesVT!: Date;
  Feriado!: number;
  ano!: string;
  mes!: string;
  

  static getFields() {
    return [
      "Dia",
      "MesVT",
      "Feriado",
      "ano",
      "mes",
      ];
  }
}

TSistemaMesVt.knex(connections.oftalmo);

export type TTSistemaMesVt = ModelObject<TSistemaMesVt>;
