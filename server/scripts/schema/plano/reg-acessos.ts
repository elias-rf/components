import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RegAcessos extends ModelBase {
  static tableName = "RegAcessos";
  static idColumn = [];

  Estacao!: string;
  Modulo!: string;
  DataAcesso!: string;
  QtdeAcessos!: string;
  

  static getFields() {
    return [
      "Estacao",
      "Modulo",
      "DataAcesso",
      "QtdeAcessos",
      ];
  }
}

RegAcessos.knex(connections.plano);

export type TRegAcessos = ModelObject<RegAcessos>;
