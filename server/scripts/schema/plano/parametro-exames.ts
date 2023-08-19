import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametroExames extends ModelBase {
  static tableName = "ParametroExames";
  static idColumn = [];

  CdCliente!: string;
  data!: Date;
  hora!: Date;
  Observacao!: string;
  CdExame!: string;
  P_A_S!: string;
  P_A_D!: string;
  Unidade!: string;
  Laudo!: string;
  OpGrid!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "data",
      "hora",
      "Observacao",
      "CdExame",
      "P_A_S",
      "P_A_D",
      "Unidade",
      "Laudo",
      "OpGrid",
      ];
  }
}

ParametroExames.knex(connections.plano);

export type TParametroExames = ModelObject<ParametroExames>;
